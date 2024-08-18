import {LiveQuery} from 'next-sanity/preview/live-query'
import {sanityFetch, token} from '../lib/sanity.fetch'
import {HomePage } from '@/components/pages/HomePage'
import {homePageQuery} from '@/lib/sanity.queries'

async function getData() {
  const data = await sanityFetch(homePageQuery, token);
  return data;
}


export default async function Page() {
  const data = await getData();

  return (
    <LiveQuery enabled={!!token} query={homePageQuery} initialData={data}>
      <HomePage sections={{ hero: data?.heroSection }} />
    </LiveQuery>
  );
}
