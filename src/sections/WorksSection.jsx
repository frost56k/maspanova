import React from 'react'
import PostList from '@/components/PostList'
import { CompasIcon } from '@/configs/icons'

const WorksSection = ({ posts }) => {
  return (
    <section className="mt-12">
      <span className="flex items-center mb-8">
        <div className="bg-back-subtle p-2 mr-4 rounded-full">
          <CompasIcon />
        </div>
        <h4 className="text-xl text-accent font-semibold">Маршруты</h4>
      </span>
      <PostList allPosts={posts} postType="works" home={true} />
    </section>
  )
}

export default WorksSection
