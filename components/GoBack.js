import Link from 'next/link'

export default function GoBack() {
  return (
    <div className="flex justify-center my-10">
      <Link href="/">
        <span className="px-5 py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
          ← View all posts
        </span>
      </Link>
    </div>
  )
}
