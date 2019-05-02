import fetch from 'isomorphic-unfetch';
import Markdown from 'react-markdown';
import Layout from '../components/Layout';

const Post = props => (
  <Layout>
    <div className="markdown">
      <Markdown
        source={`
# ${props.show.name}

${props.show.summary.replace(/<[/]?(p|b)>/g, '')}

![Image](${props.show.image.original})
     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: 'Arial';
        font-weight: lighter;
        color: grey;
      }

      .markdown h1 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Post;
