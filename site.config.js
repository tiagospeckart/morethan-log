const CONFIG = {
  // profile setting (required)
  profile: {
    name: "tiagospeckart",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "desenvolvedor fullstack",
    bio: "Desenvolvedor fullstack, psicólogo em trasição de carreira, artista",
    email: "tiagospeckart@gmail.com",
    linkedin: "https://www.linkedin.com/in/tiago-martins-speckart",
    github: "https://github.com/tiagospeckart",
    twitter: "https://twitter.com/tiagospeck_art",
  },
  projects: [
    {
      name: `geekscript-backend`,
      href: "https://github.com/tiagospeckart/geekscript-backend",
    },
  ],
  // blog setting (required)
  blog: {
    title: "zero-um",
    description: "Agradeço a visita, espero que algo aqui postado seja de seu interesse!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://zero-um.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Techonology"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
