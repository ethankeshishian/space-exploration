import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  console.log(dateString);
  return (
    <time dateTime={dateString} style={{}}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
