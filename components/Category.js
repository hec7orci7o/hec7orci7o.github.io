import Link from "next/link";
import Label from "@/components/Label";
import { useRouter } from "next/router";
import resources from "@/data/resources";

export default function Category({ categories }) {
  const router = useRouter();
  const levels = router.asPath.match(/\w+/g)
  if (router.asPath.includes("archive") && levels.length == 2) {
    categories = resources[levels[1]].categories
  }

  return (
    <div className="flex gap-3">
      {categories?.length &&
        categories.slice(0).map((category, index) => (
          <Link href="#" key={index}>
            <Label color={category.color}>{category.title}</Label>
          </Link>
        ))}
    </div>
  );
}