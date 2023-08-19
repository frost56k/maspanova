import Date from './Date'
import Link from 'next/link'
import { ForwardArrowIcon } from '@/configs/icons'
import Image from "next/image";

const PostCard = ({ allPosts, postType, home }) => {
  return <>
    <ul
      className={!home ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : undefined}
    >
      {allPosts.map(post => (
        <li
          className={
            home
              ? 'py-5'
              : 'max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          }
          key={post.title}
        >
          <Link
            href={`/${postType}/${post.slug}`}
            className={
              home
                ? 'max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
                : 'group flex flex-col justify-start gap-y-4 p-2 h-full'
            }>


            <div className="max-w-lg">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}{' '}
                {post.status === 'draft' && home && (
                  <span className="text-fore-subtle ml-2">
                    &#40;Draft&#41;
                  </span>
                )}
              </h5>
              <p className="mb-2 font-normal text-sm text-gray-700 dark:text-gray-400">
                {post.metadata.excerpt}
              </p>
            </div>
            {home ? (
              <Date
                dateString={post.created_at}
                formatStyle="LLLL yyyy"
              ></Date>
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
export default PostCard
