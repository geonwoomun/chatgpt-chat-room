export const transToMessageFormat = (date: Date) => {
  return [date.toLocaleDateString(), date.toTimeString().split(' ')[0]];
};
