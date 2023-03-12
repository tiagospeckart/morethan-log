const CONFIG = {
  // profile setting (required)
  profile: {
    name: "tiagospeckart",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Desenvolvedor Fullstack",
    bio: "Desenvolvedor fullstack | Psicólogo em trasição de carreira | Artista",
    email: "tiagospeckart@gmail.com",
    linkedin: "tiago-martins-speckart-27b518247/",
    github: "tiagospeckart",
    instagram: "tiagospeckart/",
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
    description: "Blog profissional sobre tecnologia, carreira e aprendizado",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://zero-um.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "pt-BR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion", "Techonology", "Tecnologia", "Desenvolvimento"],
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
      repo: "tiagospeckart/zero-um",
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
