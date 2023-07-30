import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón cuando el usuario ha pasado la primera sección (puedes ajustar el valor según tus necesidades)
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Agregar el event listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Eliminar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Hacer scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-button ${showButton ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
