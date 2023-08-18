import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import TracksSection from '@/sections/TracksSection'
import PostsSection from '@/sections/PostsSection'
import { draftMode } from 'next/headers'
import getMetadata from 'helpers/getMetadata'

async function getData() {
  const { isEnabled } = draftMode()
  const [allPosts, allTracks, pageData] = await Promise.all([
    getAllPosts(isEnabled, 'posts', 3) || [],
    getAllPosts(isEnabled, 'tracks', 3) || [],
    getPageBySlug('home-page', 'metadata'),
  ])
  return {
    allPosts,
    allTracks,
    pageData,
  }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('home-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = getMetadata(pageData?.metadata?.meta_title)
  const description = getMetadata(pageData?.metadata?.meta_description)
  const image = getMetadata(
    pageData?.metadata?.meta_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = getMetadata(siteSettings?.metadata?.site_url)
  const twitterHandle = getMetadata(socialData?.metadata?.twitter)

  return {
    title: title,
    description: description,
    image: image,
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
        {
          url: image,
          width: 1800,
          height: 1600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: twitterHandle,
      images: [image],
    },
  }
}

const HomePage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allTracks = data.allTracks
  const pageData = data.pageData

  return (
    <>
      <IntroSection
        avatar={pageData?.metadata.avatar?.imgix_url}
        heading={pageData?.metadata.heading}
        subHeading={pageData?.metadata.sub_heading}
        socials={pageData?.metadata.socials}
      />
      <PostsSection posts={allPosts} />
      <TracksSection posts={allTracks} />
    </>
  )
}
export const revalidate = 60
export default HomePage
