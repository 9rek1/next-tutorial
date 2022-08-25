import { css } from '@emotion/react';

const utilStyles = {
  heading2Xl: css`
    font-size: 2.5rem;
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,

  headingXl: css`
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    letter-spacing: -0.05rem;
    margin: 1rem 0;
  `,

  headingLg: css`
    font-size: 1.5rem;
    line-height: 1.4;
    margin: 1rem 0;
  `,

  headingMd: css`
    font-size: 1.2rem;
    line-height: 1.5;
  `,

  borderCircle: css`
    border-radius: 9999px;
  `,

  colorInherit: css`
    color: inherit;
  `,

  padding1px: css`
    padding-top: 1px;
  `,

  list: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  listItem: css`
    margin: 0 0 1.25rem;
  `,

  lightText: css`
    color: #999;
  `,
};

export default utilStyles;
