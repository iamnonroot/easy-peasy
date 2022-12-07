export const formatToTimeAgo = (date: Date | number | string = new Date()) => {
  if (!date) return " لحظاتی پیش";
  var seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  if (isNaN(seconds)) return " لحظاتی پیش";

  var interval = seconds / 31536000;

  if (interval > 1) {
    return `${Math.floor(interval)}  سال پیش`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `${Math.floor(interval)}  ماه پیش`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `${Math.floor(interval)}  روز پیش`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)}  ساعت پیش`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)}  دقیقه پیش`;
  }
  return `${Math.floor(seconds)}  ثانیه پیش`;
};

export const formatTimer = (timer: number = 0): string => {
  if (timer === 0) return "00:00";
  else if (timer < 60) return `00:${timer < 10 ? "0" + timer : timer}`;
  else {
    const min = Math.floor(timer / 60),
      sec = Math.floor(timer % 60);
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  }
};
