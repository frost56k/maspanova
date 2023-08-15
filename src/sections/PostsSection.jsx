import PostList from '@/components/PostList'
import { BlogpostIcon } from '@/configs/icons'

const WorksSection = ({ posts }) => {
  return (
    <section className="mt-12">
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <BlogpostIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Блоги</h4>
      </span>
      <PostList allPosts={posts} postType="posts" home={true} />
    </section>
  )
}

export default WorksSection
