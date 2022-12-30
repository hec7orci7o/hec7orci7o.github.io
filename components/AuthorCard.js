import Image from "next/image";
import { parseISO, format } from "date-fns";
import { useRouter } from "next/router";
import resources from "@/data/resources";

export default function AuthorCard() {
  const router = useRouter();
  const levels = router.asPath.match(/\w+/g)
  const author = resources[levels[1]].author
  const date = resources[levels[1]].publishedAt
  const readingTime = resources[levels[1]].readingTime

  return (
    <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
      <div className="flex items-center gap-3">
        <div className="relative flex-shrink-0 w-10 h-10">
          <Image
            src={author.image}
            alt="Author image"
            fill={true}
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-gray-800">
            {author.name}
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <time
              className="text-gray-500"
              dateTime={date}
            >
              {format(
                parseISO(date),
                "MMMM dd, yyyy"
              )}
            </time>
            <span>
              · {readingTime || "? min read"}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

AuthorCard.defaultProps = {
  author: {
    image: "https://media.licdn.com/dms/image/C5603AQGApy0m1LQ0CA/profile-displayphoto-shrink_200_200/0/1606842025193?e=1677715200&v=beta&t=RxW3Bon5rhINAl9NavCrG-IqzvTaV17Ua9rC34TLYmc",
    name: "Héctor Toral"
  },
  date: "2021-08-01",
  readingTime: "5 min read"
}