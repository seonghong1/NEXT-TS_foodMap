export default {
    titleTemplate: '%s - 네이버 맛집 지도 서비스',
    openGraph: {
      type: 'website',
      site_name: '네이버 맛집 지도 서비스',
      images: [
        { url: 'https://nextjs.org/static/blog/next-13/twitter-card.png' },
      ],
    },
    additionalLinkTags: [
      {
        rel: 'shortcut icon',
        href: '/favicon.ico',
      },
    ],
    additionalMetaTags:[
      {
        name:"naver-site-verification",
        content:"d0ad2ac51d81cc10a3eca16aaa7bcbb756f308bc"
      }
    ]
  };
  