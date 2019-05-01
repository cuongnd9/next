import Link from 'next/link';
import withLayout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Page = () => (
  <div>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome!" />
      <PostLink title="Next.js is easy!" />
    </ul>
  </div>
);

export default withLayout(Page);
