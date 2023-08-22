
import ImageModal from '../../components/ImageModal'
import { getPageBySlug } from '@/lib/cosmic'
import getMetadata from 'helpers/getMetadata'
import ReactMarkdown from 'react-markdown';

async function getData() {
    const pageData = (await getPageBySlug('gallery', 'content,metadata')) || []
    return {
        pageData,
    }
}

export async function generateMetadata() {
    const [pageData, socialData, siteSettings] = await Promise.all([
        getPageBySlug('gallery', 'metadata'),
        getPageBySlug('social-config', 'metadata'),
        getPageBySlug('site-settings', 'metadata'),
    ])

    const title = getMetadata(pageData?.metadata?.meta_title)
    const description = getMetadata(pageData?.metadata?.meta_description)
    const image = getMetadata(
        pageData?.metadata?.meta_image?.imgix_url,
        siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
    )
    const url = getMetadata(`${siteSettings?.metadata?.site_url}/gallery`)
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

const components = {
    img: ({ node, ...props }) => {
        return (
            <ImageModal src={props.src} alt={props.alt} />
        );
    },
}

const Gallery = async () => {
    const data = await getData()
    const pageData = data.pageData

    return (
        <>
            <article className="border-b border-back-subtle py-8 mb-8">
                <h1 className="text-2xl md:text-3xl mb-12 font-bold">
                    {pageData?.metadata.heading}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs lg:text-sm">
                    <ReactMarkdown components={components}>
                        {pageData?.metadata.photos}
                    </ReactMarkdown>
                </div>
            </article>
        </>
    )
}

export const revalidate = 60
export default Gallery
