import { useId, useState } from 'react';
import AssetImage from '../ui/AssetImage.jsx';
import ExternalLink from '../ui/ExternalLink.jsx';

export default function ProjectFigure({ media }) {
  const [fullSize, setFullSize] = useState(false);
  const imageId = useId();
  const hintId = useId();

  return (
    <figure className="project-figure">
      {media.diagram && (
        <div className="project-figure-controls">
          <button
            type="button"
            className="btn-secondary"
            aria-controls={imageId}
            aria-expanded={fullSize}
            onClick={() => setFullSize(value => !value)}
          >
            {fullSize ? 'Fit diagram to page' : 'View diagram at full size'}
          </button>
          {fullSize && <span id={hintId}>Scroll to read the full diagram.</span>}
        </div>
      )}
      <div
        id={imageId}
        className="project-figure-frame"
        data-full-size={fullSize || undefined}
        role={fullSize ? 'region' : undefined}
        aria-label={fullSize ? 'Full-size architecture diagram' : undefined}
        aria-describedby={fullSize ? hintId : undefined}
        tabIndex={fullSize ? 0 : undefined}
      >
        <AssetImage src={media.src} alt={media.alt} width={media.width} height={media.height} />
      </div>
      <figcaption>
        <span>{media.caption}</span>
        <div className="project-figure-links">
          {!media.diagram && <ExternalLink href={media.src}>Open full-size screenshot</ExternalLink>}
          <ExternalLink href={media.sourceUrl}>{media.sourceLabel}</ExternalLink>
        </div>
      </figcaption>
    </figure>
  );
}
