import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const themeConfig = {
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://hec7or.me${asPath}`} />
      <meta property="og:title" content={frontMatter.title || 'Hec7or'} />
      <meta property="og:description" content={frontMatter.description || 'Developer portfolio'} />
      <meta name="author" content={frontMatter.author || 'Héctor Toral'} />
    </>
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Hec7or'
    }
  },
  navbar: {
    component: <div className='container px-8 xl:px-5 mx-auto max-w-screen-lg'><Navbar /></div>
  },
  footer: {
    component: <div className='container px-8 xl:px-5 mx-auto max-w-screen-lg'><Footer /></div>
  },
  docsRepositoryBase: 'https://github.com/hec7orci7o/portfolio',
  darkMode: false, // Show or hide the dark mode toggle button.
  nextThemes: {
    defaultTheme: 'light',
    enableSystem: false,
    enableColorScheme: false,
  }
}

export default themeConfig