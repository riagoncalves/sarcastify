import Document, { Head, Main, NextScript } from "next/document";
import Header from '../components/header';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Header/>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
