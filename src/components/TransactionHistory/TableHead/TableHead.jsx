import { Head, HeadRow, HeadTitle } from './TableHead.styled';

export const TableHead = () => {
  return (
    <Head>
      <HeadRow>
        <HeadTitle>Type</HeadTitle>
        <HeadTitle>Amount</HeadTitle>
        <HeadTitle>Currency</HeadTitle>
      </HeadRow>
    </Head>
  );
};
