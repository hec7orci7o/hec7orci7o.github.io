import Image from "next/image";
import Link from "next/link";
import Category from "@/components/Category";
import { parseISO, format } from "date-fns";

export default function Frame({ post, aspect, preloadImage }) {
  return (
    <div className="cursor-pointer group">
      <div className={`relative overflow-hidden transition-all bg-gray-100 rounded-md hover:scale-105 duration-500 ${aspect === "landscape" ? "aspect-video" : "aspect-square"}`}>
        <Link href={`archive/${post.id}`}>
          <Image
            src={post.image}
            alt="Thumbnail"
            fill={true}
            priority={preloadImage ? true : false}
            sizes="(max-width: 640px) 90vw, 480px"
            className="transition-all object-cover"
          />
        </Link>
      </div>
      <Category categories={post.categories} />
      <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary">
        <Link href={`archive/${post.id}`}>
          <span
            className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
            {post.title}
          </span>
        </Link>
      </h2>
      <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div className="flex items-center gap-3">
          <div className="relative flex-shrink-0 w-5 h-5">
            {post.author.image && (
              <Image
                src={post.author.image}
                alt="Thumbnail"
                fill={true}
                priority={preloadImage ? true : false}
                sizes="30px"
                className="rounded-full object-cover"
              />
            )}
          </div>
          <span className="text-sm">{post.author.name}</span>
        </div>
        <span className="text-xs text-gray-300 dark:text-gray-600">
          &bull;
        </span>
        <time
          className="text-sm"
          dateTime={post.publishedAt}>
          {format(
            parseISO(post.publishedAt),
            "MMMM dd, yyyy"
          )}
        </time>
      </div>
    </div >
  );
}

Frame.defaultProps = {
  post: {
    title: "How to Homelab Episode 1 - Hardware considerations",
    image: "https://images.unsplash.com/photo-1587919057555-d728ff5beac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    categories: [{ title: "TECHNOLOGY", color: "blue" }],
    author: {
      image: "https://images.unsplash.com/photo-1587919057555-d728ff5beac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      name: "John Doe",
    },
    publishedAt: "2021-08-01T00:00:00.000Z",
  },
  aspect: "square",
  preloadImage: false,
};