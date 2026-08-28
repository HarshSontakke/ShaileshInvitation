import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

export function Footer() {
  const { footer } = invitationData;
  const { assets, chant, family, quote } = footer;
  const revealRef = useScrollReveal();

  return (
    <footer className="sacred-footer scroll-reveal" ref={revealRef}>
      <div className="footer-fade" />
      <AssetImage assetKey={assets.diya} className="footer-diya-left" alt="" />
      <AssetImage assetKey={assets.aarti} className="footer-aarti-left" alt="" />

      <AssetDivider assetKey={assets.divider} className="footer-divider scroll-reveal-child" />

      <h2 className="footer-quote scroll-reveal-child">
        {quote.firstLine} {quote.secondLine}
        <br />
        {quote.endingText}
      </h2>

      <div className="footer-family scroll-reveal-child">{family}</div>

      <div className="footer-chant scroll-reveal-child">
        {chant}
      </div>
    </footer>
  );
}

export default Footer;
