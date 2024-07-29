import type {QueryParams} from 'next-sanity'

import {client} from './sanity.client'

export const token = process.env.SANITY_API_READ_TOKEN

export const sanityFetch = async (query: string, token?: string) => {
  const fetchClient = token
    ? client.withConfig({ token })
    : client;
  const data = await fetchClient.fetch(query);
  return data;
};
