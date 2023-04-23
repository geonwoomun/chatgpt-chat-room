export const getAIProfileImageURL = (aiNumber: number) => {
  return `/img/ai${aiNumber % 5 || 0}.jpg`;
};
