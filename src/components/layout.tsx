import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/layout';
import utilStyles from '@/styles/utils';

type Props = {
  children?: React.ReactNode;
  home?: boolean;
};

const name = '9rek1';
export const siteTitle = 'My Blog!!!!!!!!';

const Layout = ({ children, home }: Props) => {
  return (
    <div css={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header css={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.jpg"
              css={[styles.headerHomeImage, utilStyles.borderCircle]}
              alt={name}
            />
            <h1 css={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  css={[styles.headerImage, utilStyles.borderCircle]}
                  alt={name}
                />
              </a>
            </Link>
            <h2 css={utilStyles.headingLg}>
              <Link href="/">
                <a css={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div css={styles.backToHome}>
          <Link href="/">
            <a>&lt;- Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
