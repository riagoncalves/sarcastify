import Header from './header';
import Head from "next/head";
import "../assets/js/common";
import "../assets/sass/style.scss";

const Layout = props => (
  <main>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="format-detection" content="telephone=yes"/>
      <link rel='shortcut icon' type='image/x-icon' href='https://sarcastify.s3-eu-west-1.amazonaws.com/favicon.ico'/>

      <meta property="og:title" content="Sarcastify | Meme Factory"/>
      <meta property="og:description" content="Turn your text into a sarcastic one."/>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sarcastify | Meme Factory"/>

      <meta name="twitter:title" content="Sarcastify | Meme Factory"/>
      <meta name="twitter:description" content="Turn your text into a sarcastic one."/>

      <title>Sarcastify | Meme Factory</title>
      <meta name="description" content="Turn your text into a sarcastic one."/>
      <meta name="keywords" content="sarcastic,meme, sarcastify" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:500&display=swap" rel="stylesheet"/>
    </Head>
    <div className="container">
      {props.children}
    </div>
  </main>
);

export default Layout;