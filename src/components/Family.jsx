import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

export function Family() {
  const { family } = invitationData;
  const { assets, bottomText, controls, familyMembers, sectionTitle, subtitle, tag } = family;
  const revealRef = useScrollReveal();

  const members = useMemo(
    () => [...familyMembers].sort((a, b) => a.displayOrder - b.displayOrder),
    [familyMembers]
  );
  const total = members.length;

  const [current, setCurrent] = useState(0);

  const prevIndex = useMemo(() => (total ? (current - 1 + total) % total : 0), [current, total]);
  const nextIndex = useMemo(() => (total ? (current + 1) % total : 0), [current, total]);

  const showPrevious = useCallback(() => {
    setCurrent((prev) => (total ? (prev - 1 + total) % total : 0));
  }, [total]);

  const showNext = useCallback(() => {
    setCurrent((prev) => (total ? (prev + 1) % total : 0));
  }, [total]);

  const getCardClass = useCallback(
    (index) => {
      if (index === current) return 'active';
      if (index === prevIndex) return 'prev';
      if (index === nextIndex) return 'next';
      return '';
    },
    [current, prevIndex, nextIndex]
  );

  // Touch Swipe Handling
  const touchStartRef = useRef({ x: 0, y: 0 });
  const isTrackingRef = useRef(false);

  const handleTouchStart = useCallback((e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    isTrackingRef.current = true;
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isTrackingRef.current) return;
    const touch = e.touches[0];
    const diffX = touch.clientX - touchStartRef.current.x;
    const diffY = touch.clientY - touchStartRef.current.y;
    if (Math.abs(diffY) > Math.abs(diffX)) {
      isTrackingRef.current = false;
    }
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!isTrackingRef.current) return;
      const diffX = e.changedTouches[0].clientX - touchStartRef.current.x;
      if (Math.abs(diffX) >= 50) {
        if (diffX < 0) {
          showNext();
        } else {
          showPrevious();
        }
      }
      isTrackingRef.current = false;
    },
    [showNext, showPrevious]
  );

  return (
    <section className="family-section scroll-reveal" ref={revealRef}>
      {/* Top Header */}
      <div className="family-top scroll-reveal-child">
        <AssetDivider assetKey={assets.divider} className="family-divider" />
        <p className="family-tag">{tag}</p>
        <div className="family-heading-wrapper">
          <AssetImage assetKey={assets.flourish} className="flourish left" alt="" />
          <h2 className="family-heading">{sectionTitle}</h2>
          <AssetImage assetKey={assets.flourish} className="flourish right" alt="" />
        </div>
        <p className="family-subtitle">{subtitle}</p>
      </div>

      {/* Slider */}
      <div className="family-slider-wrapper scroll-reveal-child">
        <button
          className="family-btn prev"
          onClick={showPrevious}
          type="button"
          aria-label="Previous family member"
        >
          {controls.previous}
        </button>

        <div
          className="family-slider"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {members.map((member, index) => {
            const cardState = getCardClass(index);
            const cardClassName = `family-card ${member.layout || 'portrait'}${cardState ? ` ${cardState}` : ''}`;

            return (
              <div className={cardClassName} key={member.id}>
                <AssetImage assetKey={assets.cardFlower} className="card-garland left" alt="" />
                <AssetImage assetKey={assets.cardFlower} className="card-garland right" alt="" />
                <div className="family-card-inner">
                  <AssetImage
                    assetKey={member.image}
                    className="member-img"
                    alt={member.name || `Family Member ${index + 1}`}
                  />
                </div>
                {member.name ? (
                  <div className="member-name">
                    <AssetImage assetKey={assets.lotus} alt="" />
                    <span>{member.name}</span>
                    <AssetImage assetKey={assets.lotus} alt="" />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <button
          className="family-btn next"
          onClick={showNext}
          type="button"
          aria-label="Next family member"
        >
          {controls.next}
        </button>
      </div>

      {/* Dots */}
      <div className="slider-dots scroll-reveal-child">
        {members.map((member, index) => (
          <span
            key={`${member.id}-dot`}
            className={index === current ? 'active' : undefined}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Bottom Message */}
      <p className="family-bottom-text scroll-reveal-child">{bottomText}</p>
      <AssetDivider assetKey={assets.divider} className="family-divider scroll-reveal-child" />

      {/* Decorative Aarti & Diya */}
      <AssetImage assetKey={assets.diya} className="family-diya-left" alt="" />
      <AssetImage assetKey={assets.aarti} className="family-aarti-left" alt="" />
    </section>
  );
}

export default Family;
