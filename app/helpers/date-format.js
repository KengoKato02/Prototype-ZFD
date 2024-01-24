import { helper } from '@ember/component/helper';
import { parseISO, format } from 'date-fns';

function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export default helper(function dateFormat([str] /*, named*/) {
  try {
    const date = str instanceof Date ? str : parseISO(str);
    const day = format(date, 'd');
    const daySuffix = getDaySuffix(day);

    return day + daySuffix;
  } catch (e) {
    return str;
  }
});
