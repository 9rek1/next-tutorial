import Head from 'next/head';
import Layout, { siteTitle } from '@/components/layout';
import utilStyles from '@/styles/utils';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={utilStyles.headingMd}>
        <p>Hello, I&#39;m 9rek1.</p>
        <p>
          (This is a sample website - you&#39;ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default Home;
