import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          {/* Include your custom script */}
          <script src="/kommunicateScript.js" />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
