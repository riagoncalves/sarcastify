import Document, { Head, Main, NextScript } from "next/document";
import Header from '../components/header';
import Footer from '../components/footer';

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-R7J594LTNN"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 
                `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-R7J594LTNN');`
            }}
          />
        </Head>
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
