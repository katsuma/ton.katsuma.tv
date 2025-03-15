import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  const title = "TON.KATSUma.TV";
  const description = "本当に有益なとんかつ情報サイトです";
  const host = "https://ton.katsuma.tv";
  return [
    { title },
    { name: "description", content: description },

    { property: "og:url", content: host },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "ja_JP" },
    { property: "og:image", content: `${host}/opengraph-image.jpg`},
    { property: "og:image:type", content: "image/jpeg" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },

    { property: "twitter:cart", content: "summary_large_image" },
    { property: "twitter:site", content: "@ryo_katsuma" },
    { property: "twitter:creator", content: "@ryo_katsuma" },
    { property: "twitter:title", content: title },
    { property: "twitter:description", content: description },
    { property: "twitter:image", content: `${host}/opengraph-image.jpg`},
    { property: "twitter:image:type", content: "image/jpeg" },
    { property: "twitter:image:width", content: "1200" },
    { property: "twitter:image:height", content: "630" },
  ];
}

export default function Home() {
  return <Welcome />;
}
