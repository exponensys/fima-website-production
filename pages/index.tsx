import { GetStaticProps } from 'next';
import App from '../src/App';

export default function HomePage() {
  return <App />;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60, // Revalidate every 60 seconds
  };
};