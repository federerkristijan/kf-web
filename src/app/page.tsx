import {LiveQuery} from 'next-sanity/preview/live-query'
import {sanityFetch, token} from '../lib/sanity.fetch'
import {HomePage} from '@/components/pages/HomePage'
import {homePageQuery} from '@/lib/sanity.queries'
import PreviewProvider from '@/components/preview/PreviewProvider';

async function getData() {
  const data = await sanityFetch(homePageQuery, token);
  return data;
}

export default async function Page() {
  const data = await getData();

  return (
    <PreviewProvider token={token || ''}>
      <LiveQuery query={homePageQuery} initialData={data} throwOnMissingProvider={false} enabled={false}>
        <HomePage sections={{ hero: data?.heroSection }} />
      </LiveQuery>
    </PreviewProvider>
  );
}
