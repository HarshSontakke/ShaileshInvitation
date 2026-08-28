import React, { useState, useCallback, useEffect } from 'react';
import { AnimationProvider } from './context/AnimationContext';
import { MusicProvider, useMusic } from './context/MusicContext';
import Curtain from './components/Curtain';
import Hero from './components/Hero';
import Family from './components/Family';
import Timeline from './components/Timeline';
import TimelineModal from './components/TimelineModal';
import Location from './components/Location';
import Blessings from './components/Blessings';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function MainContent() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { startMusic } = useMusic();

  const openTimelineEvent = useCallback((event) => {
    setSelectedEvent(event);
  }, []);

  const closeTimelineEvent = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!selectedEvent) {
      document.body.style.overflow = 'auto';
      return;
    }
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedEvent]);

  return (
    <AnimationProvider>
      {/* Royal Opening Curtain */}
      <Curtain onOpenStart={startMusic} />

      {/* Hero Temple Section */}
      <Hero />

      {/* Family / Inviter Carousel */}
      <Family />

      {/* Utsav Timeline Schedule */}
      <Timeline onSelectEvent={openTimelineEvent} />

      {/* Event Details Popup Modal */}
      <TimelineModal
        event={selectedEvent}
        isOpen={Boolean(selectedEvent)}
        onClose={closeTimelineEvent}
      />

      {/* Venue & Google Maps */}
      <Location />

      {/* Blessings & Interactive Flower Shower */}
      <Blessings />

      {/* Celebration Gallery */}
      <Gallery />

      {/* Sacred Footer */}
      <Footer />
    </AnimationProvider>
  );
}

export function App() {
  return (
    <MusicProvider>
      <MainContent />
    </MusicProvider>
  );
}

export default App;
