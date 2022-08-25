import { parseISO, format } from 'date-fns';

const Date = ({ dateString }: { dateString: string | undefined }) => {
  if (dateString === void 0) return <></>;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
};

export default Date;
