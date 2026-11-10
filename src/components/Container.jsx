const widths = { narrow: 'max-w-4xl', content: 'max-w-6xl', wide: 'max-w-[1200px]' };

export default function Container({ width = 'wide', className = '', children }) {
  return <div className={`w-full min-w-0 mx-auto ${widths[width]} ${className}`}>{children}</div>;
}
