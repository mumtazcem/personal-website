import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  // TODO: Fix below.
  if (dateString == undefined){
      return "abc"
  }
  console.log(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}