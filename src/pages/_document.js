import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <title>Yunseo Jeong</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#76ff9f" />
        <meta property="og:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
