// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add your Geist font CDN or local font links */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Geist+Sans:wght@400;600&family=Geist+Mono:wght@400;600&display=swap"
          />
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
