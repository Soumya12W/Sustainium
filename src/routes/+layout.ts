import { serverUrl } from '$lib';
import type { LayoutLoad } from './$types';

export const load = (async ({ url,fetch }) => {
	let slug = url.pathname.substring(1);
    
    if (slug === '') {
        slug = 'home';
    }
	const query = `
    query getBlogPost($slug: String) {
        sustainiumPages(filters: { slug: { eq: $slug } }) {
          data {
            attributes {
              seo {
                metaTitle
                metaDescription
                keywords
                canonicalURL
              }
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
			seo: data.data.sustainiumPages.data[0].attributes.seo,
			url: url.href
		}		
	} catch (error) {	
		return {
			status: 500,
			error: 'Internal server error',
			url: url.href
		};
	}
}) satisfies LayoutLoad;
