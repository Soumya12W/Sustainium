import type { PageLoad } from './$types';
import { serverUrl } from '$lib';
import { page } from '$app/stores';

export const load = (async ({ url, fetch, setHeaders }) => {
    const pageParam = Number(url.searchParams.get('page')) || 1;
    const query = `
        query GetBlogs($page: Int!) {
            sustainiumBlogs(pagination: { page: $page, pageSize: 9 }sort: "Date:DESC") {
                meta {
                    pagination {
                        pageCount
                    }
                }
                data {
                    attributes {
                        title
                        description
                        slug
                        Date
                        coverImage {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                }
                            }
                        }
                    }
                }
            }
        }
    `;

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables: { page: pageParam } })
    };

    try {
        const response = await fetch(serverUrl + '/graphql', options);

        if (!response.ok) {
            const message = `An error has occurred: ${response.status}`;
            throw new Error(message);
        }

        const data = await response.json();

        return {
            props: {
                blogs: data.data.sustainiumBlogs.data,
                totalPages: data.data.sustainiumBlogs?.meta?.pagination?.pageCount || 1,
                currentPage: pageParam
            },
        };
    } catch (error) {
        return {
            status: 500,
            error: 'Internal server error'
        };
    }
}) satisfies PageLoad;
