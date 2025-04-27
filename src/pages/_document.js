import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>Yunseo Jung</title>

        <meta name="theme-color" content="#76ff9f" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="naver-site-verification" content="862fcc990e2d6cfb73f5e650f59c4cdcb5b59fdb" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
