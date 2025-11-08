import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './MagicBento.css';

const MagicBento = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate cards on mount
    gsap.fromTo(
      cardsRef.current.filter(Boolean),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );

    // Mouse move effect for spotlight
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cards = [
    { title: 'Motion Design', description: 'Fluid animations' },
    { title: 'Video Editing', description: 'Cinematic storytelling' },
    { title: '3D Modeling', description: 'Immersive worlds' },
    { title: 'UI/UX Design', description: 'User-centered design' },
  ];

  return (
    <div ref={containerRef} className="magic-bento-container">
      <div className="magic-bento-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="magic-bento-card"
          >
            <div className="magic-bento-spotlight"></div>
            <div className="magic-bento-particles"></div>
            <div className="magic-bento-content">
              <h3 className="magic-bento-title">{card.title}</h3>
              <p className="magic-bento-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MagicBento;
