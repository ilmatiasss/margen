import Image from "next/image";
import type { ArticleImage, CategorySlug } from "@/types/content";
import { EditorialArt } from "./editorial-art";

type MediaFrameProps = {
  image?: ArticleImage;
  seed: string;
  category?: CategorySlug;
  index?: string;
  scale?: "hero" | "default" | "small";
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function MediaFrame({
  image,
  seed,
  category,
  index,
  scale,
  className,
  sizes,
  priority,
}: MediaFrameProps) {
  if (image) {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={`object-cover grayscale ${className ?? ""}`}
      />
    );
  }

  return (
    <EditorialArt
      seed={seed}
      category={category}
      index={index}
      scale={scale}
      className={className}
    />
  );
}
