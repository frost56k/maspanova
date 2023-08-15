import { parseISO, format } from 'date-fns'
import { ru } from 'date-fns/locale'

const Date = ({ dateString, formatStyle }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, formatStyle, { locale: ru })}</time>
}
export default Date
