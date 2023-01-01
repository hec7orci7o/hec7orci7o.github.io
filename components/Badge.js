import React from 'react'

const tags = {
  GREEN: "bg-green-100 text-green-700",
  BLUE: "bg-blue-100 text-blue-600",
  ORANGE: "bg-orange-100 text-orange-700",
  PURPLE: "bg-purple-100 text-purple-600",
  PINK: "bg-pink-100 text-pink-600",
  RED: "bg-red-100 text-red-600",
  GRAY: "bg-gray-100 text-gray-700"
};

export default function Badge({ color, children }) {
  return (
    <span className={`${tags[color]} text-xs font-semibold ml-2 px-2 py-0.5 rounded`}>
      {children}
    </span>
  )
}
