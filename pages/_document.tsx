import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="See pictures" />
          {/* <meta property="og:site_name" content="photography.enk.icu" /> */}
          <meta
            property="og:description"
            // content="Inky's photography gallery."
          />
          {/* <meta property="og:title" content="Inky's Photography Practice." /> */}
          {/* <meta name="twitter:card" content="summary_large_image" /> */}
          {/* <meta name="twitter:title" content="Inky's Photography Practice." /> */}
          <meta
            name="twitter:description"
            // content="Inky's photography gallery."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
