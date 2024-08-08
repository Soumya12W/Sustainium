import type { PageLoad } from './$types';
import { serverUrl } from '$lib';

export const load = (async ({ fetch, params }) => {
	const { slug } = params;
	const query = `
    query getBlogPost($slug: String) {
        sustainiumBlogs(filters: { slug: { eq: $slug } }) {
            data {
                attributes {
                    content
					seo {
						metaTitle
						metaDescription
						metaImage {
							data {
								attributes {
									url
								}
							}
						}
						metaSocial {
							socialNetwork
							title
							description
							image {
								data {
									attributes {
										url
									}
								}
							}
						}
						keywords
						structuredData
					}
                    coverImage {
                        data {
                            attributes {
                                url
                                alternativeText
                            }
                        }
                    }
                    title
                }
            }
        }
    }
`;

	const variables = { slug };

	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables })
	};
	try {
		const response = await fetch(serverUrl + '/graphql', options);
		if (!response.ok) {
			const message = `An error has occured: ${response.status}`;
			throw new Error(message);
		}
		const data = await response.json();
		
		return {
			props: {
				blog: data.data.sustainiumBlogs.data[0].attributes
				

			},
			seo: data.data.sustainiumBlogs.data[0].attributes.seo
		};
	} catch (error) {
		return {
			status: 500,
			error: 'Internal server error'
		};
	}
}) satisfies PageLoad;
