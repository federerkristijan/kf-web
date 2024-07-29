import {LiveQuery} from 'next-sanity/preview/live-query'
import {sanityFetch, token} from '../lib/sanity.fetch'
import {HomePage, homePageQuery } from '@/components/pages/HomePage'

export default function Home({draftMode, data}: {draftMode: boolean, data: any}) {
  return (
    <LiveQuery enabled={draftMode} query={homePageQuery} initialData={data}>
      <HomePage sections={{ hero: data?.heroSection }} />
    </LiveQuery>
  );
}
