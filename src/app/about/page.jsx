import Image from 'next/image'
import { getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import markdownStyles from '../../components/markdown-styles.module.css'
import ReactMarkdown from 'react-markdown'
import getMetadata from 'helpers/getMetadata'


async function getData() {
  const pageData = (await getPageBySlug('about-page', 'content,metadata')) || []
  return {
    pageData,
  }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('about-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = getMetadata(pageData?.metadata?.meta_title)
  const description = getMetadata(pageData?.metadata?.meta_description)
  const image = getMetadata(
    pageData?.metadata?.meta_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = getMetadata(`${siteSettings?.metadata?.site_url}/about`)
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

const AboutPage = async () => {
  const data = await getData()
  const pageData = data.pageData

  return (
    <>
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">
          {pageData?.metadata.heading}
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col">
          {pageData.metadata.image && (
            <div className="relative max-w-[200px] md:max-w-sm mb-8 mx-auto text-center">
              <Image
                src={pageData.metadata.image?.imgix_url}
                alt="Developer avatar"
                quality={60}
                width={270}
                height={270}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="w-fit rounded-md"
              />
            </div>
          )}
          <div className='socials flex justify-center space-x-4'>
          <Socials
            email={pageData?.metadata.socials.metadata.email}
            instagram={pageData?.metadata.socials.metadata.instagram}
            youtube={pageData?.metadata.socials.metadata.youtube}
          />
          </div>
          </div>
          <div className="flex-1 mt-0 flex flex-col justify-start gap-y-8 px-12 pl-5">
          <ReactMarkdown
        className={markdownStyles['markdown']}
      >
        {pageData?.metadata.content}
      </ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 60
export default AboutPage
