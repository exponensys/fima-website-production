import { initHeroSlides } from '../utils/initHeroSlidesData';

export function HeroSlidesInitButton() {
  const handleInit = async () => {
    console.log('🎬 Initializing hero slides...');
    const result = await initHeroSlides();
    if (result.success) {
      alert('✅ Hero slides initialized! Refresh the page to see changes.');
    } else {
      alert('❌ Error: ' + result.error);
    }
  };

  return (
    <button
      onClick={handleInit}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px 20px',
        backgroundColor: '#B5C233',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 9999
      }}
    >
      Init Hero Slides
    </button>
  );
}
