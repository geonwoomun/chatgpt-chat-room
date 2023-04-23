export const transToMessageFormat = (date: Date | string) => {
  const targetDate = new Date(date);
  return [targetDate.toLocaleDateString(), targetDate.toTimeString().split(' ')[0]];
};
