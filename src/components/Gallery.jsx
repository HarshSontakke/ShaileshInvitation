import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

export function Gallery() {
  const { gallery } = invitationData;
  const { assets, heading, images, subtitle } = gallery;
  const revealRef = useScrollReveal();

  return (
    <section className="gallery-section scroll-reveal" ref={revealRef}>
      <AssetDivider assetKey={assets.divider} className="gallery-divider scroll-reveal-child" />
      <h2 className="gallery-heading scroll-reveal-child">{heading}</h2>
      <AssetDivider assetKey={assets.smallDivider} className="gallery-small-divider scroll-reveal-child" />

      <p className="gallery-subtitle scroll-reveal-child">
        {subtitle.map((line, idx) => (
          <span key={line}>
            {line}
            {idx < subtitle.length - 1 && <br />}
          </span>
        ))}
      </p>

      <div className="gallery-grid scroll-reveal-child">
        {images.map((img) => (
          <div
            className={`gallery-item${img.size === 'large' ? ' large' : ''}`}
            key={img.id}
          >
            <AssetImage
              assetKey={img.image}
              alt={img.alt}
              loading={img.size === 'large' ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
