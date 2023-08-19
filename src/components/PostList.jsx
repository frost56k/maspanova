import Date from './Date'
import Link from 'next/link'
import { ForwardArrowIcon } from '@/configs/icons'
import Image from "next/image";

const PostList = ({ allPosts, postType, home }) => {
  return <>
    <ul
      className={!home ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : undefined}
    >
      {allPosts.map(post => (
        <li
          className={
            home
              ? 'py-5 px-1'
              : 'flex flex-col bg-white dark:bg-gray-800 rounded shadow-sm hover:shadow-md transition-all relative'
          }
          key={post.title}
        >
          <Link
            href={`/${postType}/${post.slug}`}
            className={
              home
                ? 'group flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 py-5 -my-5 -mx-7 hover:bg-back-subtle transition-colors border-b-2'
                : 'group flex flex-col justify-start gap-y-6 p-8 h-full'
            }>

            <div className="flex flex-row ld:flex-row md:flex-row pr-2">
              <Image
                className="rounded-md lg:w-31 md:w-16 mr-2 object-cover"
                src={post.metadata.cover_image.imgix_url}
                width={124}
                height={124}
                alt={post.title}
                style={{
                  width: "124px",
                  height: "124px"
                }}
              />

              <div className="max-w-lg md:ml-4">
                <p className="text-sm sm:text-xs md:text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                  {post.title}{' '}
                  {post.status === 'draft' && home && (
                    <span className="text-fore-subtle ml-2">
                      (Draft)
                    </span>
                  )}
                </p>
                <p className="font-normal text-xs md:text-base text-fore-subtle mb-3 lg:mb-0 lg:pr-2">
                  {post.metadata.excerpt}
                </p>
              </div>
            </div>

            {home ? (
              <div  className="self-end mt-auto font-normal text-xs md:text-base text-fore-subtle mb-3 lg:mb-0 lg:pr-2">
              <Date
                dateString={post.created_at}
                formatStyle="LLLL yyyy"
              ></Date>
              </div>
            ) : (
              <p className="flex items-center text-fore-subtle text-sm">
                Читать
                <span className="group hidden group-hover:block ml-2">
                  <ForwardArrowIcon />
                </span>
                {post.status === 'draft' && (
                  <span className="absolute right-1 top-1 bg-back-subtle px-3 py-1 rounded text-accent">
                    Черновик
                  </span>
                )}
              </p>
            )}

          </Link>
        </li>
      ))}
    </ul>
  </>;
}
export default PostList
