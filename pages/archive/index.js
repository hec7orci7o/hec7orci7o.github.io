import Layout from '@/components/Layout'
import Frame from '@/components/Frame'
import resources from '@/data/resources'
import categories from '@/data/categories'
import Badge from '@/components/Badge'
import { useState, useEffect } from 'react'

export default function Archive({ post }) {
  const _categories = Object.values(categories)
  const [active, setActive] = useState('ALL')
  const [posts2Show, setPosts] = useState(post)

  useEffect(() => {
    if (active === 'ALL') {
      setPosts(post)
      return
    }
    const filtered = post.filter(item => {
      const categories = item.categories.map(category => category.title)
      return categories.includes(active)
    })
    setPosts(filtered)
  }, [active])

  return (
    <div className='py-5 lg:py-8'>
      <h1 className="text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
        Archive
      </h1>
      <div className="text-center">
        <p className="mt-2 text-lg">
          See all posts I have ever written.
        </p>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => setActive('ALL')}
        >
          <Badge color='GRAY'>ALL</Badge>
        </button>
        {_categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActive(category.title)}
          >
            <Badge color={category.color}>{category.title}</Badge>
          </button>
        ))}
      </div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {posts2Show.map((post) => (
          <Frame key={post.title} post={post} />
        ))}
      </div>
    </div>
  )
}

Archive.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getStaticProps() {
  let post = []
  for (const [key, value] of Object.entries(resources)) {
    post = [...post, { ...value, id: key }]
  }
  post.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

  return {
    props: {
      post,
    },
  }
}