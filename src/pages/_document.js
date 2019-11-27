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
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                  google_ad_client: "ca-pub-4462855175615535",
                  enable_page_level_ads: true
                });`
            }}
          />
        </body>
      </html>
    );
  }
}
