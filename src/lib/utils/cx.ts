export const cx = (...classNames: (string | undefined)[]) => {
  return classNames.filter(Boolean).join(' ');
};
