import { cx } from '@/lib/utils';

export function Button({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <button
      className={cx(
        'border-none cursor-pointer inline-block py-[12px] px-[35px] rounded-[8px] bg-pumpkin-100 hover:bg-pumpkin-400 hover:scale-105 focus:bg-pumpkin-400 focus:scale-105 text-white shadow-button transition ease-in-out delay-150 duration-150',
        className
      )}
    >
      {children}
    </button>
  );
}
