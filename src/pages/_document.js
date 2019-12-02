import Document, { Head, Main, NextScript } from "next/document";
import Header from '../components/header';
import Footer from '../components/footer';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head/>
        <body>
          <Header/>
          <Main/>
          <NextScript />
          <Footer/>
        </body>
      </html>
    );
  }
}
