import { FeaturedArticle } from "@/components/featured-article";
import { LatestGrid } from "@/components/latest-grid";
import { MarqueeBand } from "@/components/marquee-band";
import { SplitFeature } from "@/components/split-feature";
import { TheList } from "@/components/the-list";

const MARQUEE_ITEMS = [
  "MARGEN",
  "CULTURA PARA QUIENES BUSCAN MÁS",
  "REVISTA INDEPENDIENTE CHILENA",
];

export default function Home() {
  return (
    <>
      <FeaturedArticle />
      <MarqueeBand items={MARQUEE_ITEMS} />
      <LatestGrid />
      <TheList />
      <SplitFeature />
    </>
  );
}
