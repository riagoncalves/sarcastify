import Layout from '../components/layout';
import Link from 'next/link';

let age = () => {
  let diff =(Date.now() - new Date("October 22, 1997").getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
}

export default function About() {
  return (
    <Layout>
      <div className="about">
        <div>
          <h3>Why to use this?🤔</h3>
          <p>It is exceedingly boring to type in the "<a href="https://knowyourmeme.com/memes/mocking-spongebob" target="_blank" rel="noopener">spongemock</a>" meme format.</p>
          <p>Now you can write as much as you want and just copypasta to your memes at the end.</p>
        </div>
        <div>
          <h3>Developed by who?😎</h3>
          <p>I'm a {age()} y/o Web Developer with weird hobbies like making this kind of websites.</p>
          <p>This is based in Nextjs with React, it's deployed at Netlify and used <Link href="https://gist.github.com/wesbos/1bb53baf84f6f58080548867290ac2b5"><a rel="noopener" target="_blank">Wes Bos prototype</a></Link> to sarcastify everything.</p>
          <p>You can give a peek at the code <Link href="https://github.com/riagoncalves/sarcastic"><a rel="noopener" target="_blank">here</a></Link>.</p>
          <p>If you loved this website just get in touch with me at <Link href="https://riagoncalves.dev/"><a rel="noopener" target="_blank">riagoncalves.dev</a></Link> or send an email to <Link href="mailto:hello@riagoncalves.dev"><a>hello@riagoncalves.dev</a></Link>.</p>
        </div>
      </div>
    </Layout>
  );
}