import { useEffect, useRef, useState } from 'react';

export function Typewriter({
  text,
  delay,
}: Readonly<{
  text: string;
  delay?: number;
}>) {
  const i = useRef(0);
  const [output, setOutput] = useState('');

  useEffect(() => {
    const type = () => {
      const textArr = Array.from(text);
      if (i.current < textArr.length) {
        const val = textArr.at(i.current);
        setOutput((prev) => prev + val);
        i.current++;
        setTimeout(type, delay);
      }
    };

    type();
  }, []);

  return (
    <div>
      <span>{output}</span>
      <span className='animate-blink'>|</span>
    </div>
  );
}
