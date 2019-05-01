import { withRouter } from 'next/router';
import withLayout from '../components/Layout';

const Page = props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
);

export default withLayout(withRouter(Page));
