export interface TwoColProps {
  left: React.ReactNode;
  right: React.ReactNode;
  emphasis?: 'left' | 'right' | 'none';
  className?: string;
}

export default function TwoCol({left, right, emphasis, className}: TwoColProps) {
  const getWidths = () => {
    switch (emphasis) {
      case 'left':
        return { left: 'md:w-2/3', right: 'md:w-1/3' };
      case 'right':
        return { left: 'md:w-1/3', right: 'md:w-2/3' };
      case 'none':
      default:
        return { left: 'md:w-1/2', right: 'md:w-1/2' };
    }
  };

  const { left: leftWidth, right: rightWidth } = getWidths();

  return (
    <div className={`flex flex-col-reverse md:flex-row gap-[1.25rem] ${className || ''}`}>
      <div className={`flex-auto w-full ${leftWidth}`}>{left}</div>
      <div className={`flex-auto w-full ${rightWidth}`}>{right}</div>
    </div>
  );
}
