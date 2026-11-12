import { useState } from 'react';

export default function AssetImage({ src, alt, className }) {
  const [failedSrc, setFailedSrc] = useState(null);
  if (!src || src === failedSrc) return null;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailedSrc(src)}
    />
  );
}
