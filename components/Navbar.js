import Link from 'next/link'
import React from 'react'
import pages from '@/data/pages'
import Badge from './Badge'

export default function Navbar() {
  return (
    <nav className='flex flex-wrap justify-between items-center md:gap-10 md:flex-nowrap py-5 lg:py-8'>
      <div className="col-start-2 col-span-2 hidden sm:flex flex-col gap-y-1 opacity-90 dark:opacity-80">
        <Link href={'/'}>
          <span className="font-sans font-medium text-sm text-gray-900">
            Héctor Toral
          </span>
        </Link>
        <span className="font-sans font-medium text-sm text-gray-900">
          ©{new Date().getFullYear()}
        </span>
      </div>
      <div className='flex gap-x-10'>
        {pages?.map((page) => (
          <Link href={page.href} key={page.label}>
            <span className="py-2 text-sm font-medium text-gray-600 hover:text-blue-500">
              {page.label}
            </span>
            {page?.badge && <Badge color={page.badge.color}>{page.badge.text}</Badge>}
          </Link>
        ))}
      </div>
    </nav>
  )
}
