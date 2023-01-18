import React from 'react';
import { Container, Content, Nav } from './styles';

export const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(false);
  const [position, setPosition] = React.useState();
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
    console.log(width * active);
  }, [active]);
  console.log(active, position);

  const handlePrev = () => {
    if (active > 0) setActive(active - 1);
  };

  const handleNext = () => {
    if (active < slides.length - 1) setActive(active + 1);
  };
  return (
    <Container>
      <Content
        ref={contentRef}
        style={{ transform: `translateX(${position}px)` }}>
        {slides?.length > 0 &&
          slides.map((slide, index) => (
            <div key={index} className="item">
              <img height={500} src={slide?.src} alt={slide?.title} />
            </div>
          ))}
      </Content>
      <Nav>
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Próximo</button>
      </Nav>
    </Container>
  );
};
