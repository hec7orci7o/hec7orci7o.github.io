import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='container px-8 xl:px-5 mx-auto max-w-screen-lg'>
      <div className="antialiased text-gray-800 flex flex-col min-h-screen">
        <div className="grow">
          <Navbar {...props} />
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
