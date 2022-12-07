import moment from "jalali-moment";

export const today = (locale: string = "fa") => {
  return moment().locale(locale);
};

export const formatToJalali = (
  date: Date | number | string = Date.now(),
  format: string = "jYYYY/jMM/jDD"
) => {
  return moment(date).locale("fa").format(format);
};

export default {
  today,
  ...moment,
};
