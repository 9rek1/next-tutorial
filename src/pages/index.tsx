import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Date from '@/components/date';
import Layout, { siteTitle } from '@/components/layout';
import { getSortedPostsData } from '@/lib/posts';
import utilStyles from '@/styles/utils';

const Home = ({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={utilStyles.headingMd}>
        <p>Hello, I&#39;m 9rek1.</p>
        <p>This is test deploy</p>
      </section>
      <section css={[utilStyles.headingMd, utilStyles.padding1px]}>
        <h2 css={utilStyles.headingLg}>Blog</h2>
        <ul css={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li css={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small css={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
};
