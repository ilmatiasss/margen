import type { ComponentType, SVGProps } from "react";
import { socialLinks } from "@/data/content";
import { InstagramIcon, SpotifyIcon, XIcon, YoutubeIcon } from "./icons";

const ICONS: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  Instagram: InstagramIcon,
  X: XIcon,
  YouTube: YoutubeIcon,
  Spotify: SpotifyIcon,
};

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-5 ${className ?? ""}`}>
      {socialLinks.map((social) => {
        const Icon = ICONS[social.label];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              className="text-muted transition-colors hover:text-foreground"
            >
              {Icon ? <Icon className="h-[18px] w-[18px]" /> : social.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
