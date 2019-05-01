import Link from 'next/link';
import withLayout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Page = () => (
  <div>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome!" />
      <PostLink id="easy-nextjs" title="Next.js is easy!" />
    </ul>
  </div>
);

export default withLayout(Page);
