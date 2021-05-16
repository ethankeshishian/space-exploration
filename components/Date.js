import { parseISO, format } from 'date-fns';

// Parses given date and returns component in Month Day, Year format
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} style={{}}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  );
}
