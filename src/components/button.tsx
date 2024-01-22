import { cx } from '@/lib/utils';

export function Button({
  children,
  className,
  url,
}: Readonly<{ children: React.ReactNode; className?: string; url?: string }>) {
  const _className = cx(
    'border-none cursor-pointer inline-block py-[12px] px-[35px] rounded-[8px] bg-pumpkin-100 hover:bg-pumpkin-400 hover:scale-105 focus:bg-pumpkin-400 focus:scale-105 text-white shadow-button transition ease-in-out delay-150 duration-150',
    className
  );
  return url ? (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={_className}
    >
      {children}
    </a>
  ) : (
    <button className={_className}>{children}</button>
  );
}
