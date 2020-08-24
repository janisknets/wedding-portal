import moment from 'moment';

export default (date: Date, format?: string) => {
  return moment(date).format(format || 'DD MMM HH:mm');
}
