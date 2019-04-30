import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <Link href="/about">
      <button>Go to About Page</button>
    </Link>
    <p>Hello Next</p>
  </div>
);

export default Index;
