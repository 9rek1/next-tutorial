import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Date from '@/components/date';
import Layout from '@/components/layout';
import { getAllPostIds, getPostData, Post as PostType } from '@/lib/posts';
import utilStyles from '@/styles/utils';

type Params = ParsedUrlQuery & { id: string };
type Props = { postData: PostType };

const Post = ({ postData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 css={utilStyles.headingXl}>{postData.title}</h1>
        <div css={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = getPostData(params!.id);
  return { props: { postData } };
};
