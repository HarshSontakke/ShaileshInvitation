import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { invitationData } from '../data/invitationData';
import { AssetImage, AssetDivider } from './AssetImage';

export function Timeline({ onSelectEvent }) {
  const { timeline } = invitationData;
  const { assets, events, heading, subtitle, tag, tip } = timeline;
  const revealRef = useScrollReveal();

  return (
    <section className="utsav-section scroll-reveal" ref={revealRef}>
      <AssetDivider assetKey={assets.divider} className="section-divider scroll-reveal-child" />
      {tag && <p className="utsav-tag scroll-reveal-child">{tag}</p>}
      <h2 className="utsav-heading scroll-reveal-child">{heading}</h2>
      <p className="utsav-subtitle scroll-reveal-child">{subtitle}</p>

      <div className="utsav-timeline scroll-reveal-child">
        <AssetImage assetKey={assets.lotus} className="timeline-lotus top-lotus" alt="" />

        {events.map((event) => (
          <div className={`timeline-row row-${event.side}`} key={event.id}>
            <div className="timeline-node" />
            <div
              className="utsav-tile"
              data-date={event.date}
              data-desc={event.description}
              data-place={event.location}
              data-time={event.time}
              data-title={event.title}
              onClick={() => onSelectEvent && onSelectEvent(event)}
              role="button"
              tabIndex={0}
            >
              {event.label}
            </div>
          </div>
        ))}

        <AssetImage assetKey={assets.lotus} className="timeline-lotus bottom-lotus" alt="" />
      </div>

      <div className="timeline-tip scroll-reveal-child">
        <AssetDivider assetKey={assets.smallDivider} className="tip-divider" />
        <div className="tip-pill">{tip}</div>
      </div>
    </section>
  );
}

export default Timeline;
