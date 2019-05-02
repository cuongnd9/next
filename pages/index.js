import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = props => (
  <Layout>
    <h1>Marvel TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      h1 {
        color: lightblue;
        font-weight: lighter;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: tomato;
      }

      a:hover {
        opacity: 0.5;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=marvel');
  const data = await res.json();
  console.log('Fetching data...');
  return {
    shows: data.map(entry => entry.show)
  };
};

export default Index;
