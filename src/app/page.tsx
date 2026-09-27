import { FeaturedArticle } from "@/components/featured-article";
import { LatestGrid } from "@/components/latest-grid";
import { SplitFeature } from "@/components/split-feature";
import { TheList } from "@/components/the-list";

export default function Home() {
  return (
    <>
      <FeaturedArticle />
      <LatestGrid />
      <TheList />
      <SplitFeature />
    </>
  );
}
