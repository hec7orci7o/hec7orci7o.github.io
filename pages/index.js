import Layout from '@/components/Layout'
import Frame from '@/components/Frame'
import resources from '@/data/resources'

export default function Home({ post }) {
  return (
    <div className='py-5 lg:py-8'>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
        {post.slice(0, 2).map((post) => (
          <Frame key={post.title} post={post} aspect={"landscape"} />
        ))}
      </div>
      <div className="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
        {post.slice(2).map((post) => (
          <Frame key={post.title} post={post} />
        ))}
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
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