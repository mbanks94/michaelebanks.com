export const cx = (...classNames: string[]) => {
  return classNames.filter(Boolean).join(' ');
};
