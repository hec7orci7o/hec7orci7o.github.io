import Image from 'next/image'
import Layout from '@/components/Layout'
import {
  SiLinux,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiReact,
  SiExpress
} from 'react-icons/si'
import resources from '@/data/resources'

export default function About({ post }) {
  return (
    <div className='py-5 lg:py-8'>
      <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
        About
      </h1>
      <p className="text-center">
        Computer engineer based in zaragoza
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        <div className="relative overflow-hidden rounded-md aspect-square mx-auto w-full h-full sm:w-64 sm:h-64">
          <Image
            src="/me.jpg"
            alt={"me"}
            fill={true}
            sizes="(max-width: 320px) 100vw, 320px"
            className='object-cover'
          />
        </div>
        <p className="text-left">
          Hi, I'm Hector, a computer engineer from zaragoza, moved by the desire to learn something new every day.
          Within the IT sector, what most attracts my attention and is currently my passion is the world of security, system administration and web apps.
          On the other hand, in my free time I like working out and meeting my friends.
        </p>
      </div>
      <h2 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl">
        My Toolkit
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
        <p className="text-left">
          It's always good to go well equipped to the places where you are needed, that's why I try to keep my tools updated as well as my knowledge about them.<br />
          Apart from the ones you can see below, I also have knowledge in other technologies such as: Java, Haskell, Flex & Bison, relational and non-relational databases and other web frameworks such as django and next js.
        </p>
        <div className="flex-1 h-full flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-red-600 dark:bg-light dark:hover:bg-white">
            <SiLinux className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-600 dark:bg-light dark:hover:bg-white">
            <SiDocker className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-orange-500 dark:bg-light dark:hover:bg-white">
            <SiGit className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-indigo-800 dark:bg-light dark:hover:bg-white">
            <SiCplusplus className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-yellow-300 dark:bg-light dark:hover:bg-white">
            <SiJavascript className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-500 dark:bg-light dark:hover:bg-white">
            <SiPython className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-blue-400 dark:bg-light dark:hover:bg-white">
            <SiReact className="text-4xl" />
          </div>
          <div className="flex items-center justify-center w-36 h-16 shadow hover:text-green-400 dark:bg-light dark:hover:bg-white">
            <SiExpress className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

About.getLayout = function getLayout(page) {
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