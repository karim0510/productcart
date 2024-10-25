import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://static.octopuscdn.com/fonts/Gotham/fonts.min.css"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://static.octopuscdn.com/favicons/favicon-32x32.png"
          sizes="32x32"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
