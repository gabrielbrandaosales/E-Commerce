import React from 'react';
import { Container, Content, Nav } from './styles';

export const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState();
  const contentRef = React.useRef();

  React.useEffect(() => {
    if (contentRef) {
      const { width } = contentRef?.current.getBoundingClientRect();
      setPosition(-(width * active));
    }
  }, [active]);

  const handlePrev = () => {
    if (active > 0) setActive(active - 1);
  };

  const handleNext = () => {
    if (active < slides.length - 1) setActive(active + 1);
    else setActive(0);
  };
  return (
    <Container>
      <Content
        ref={contentRef}
        style={{
          transform: `translateX(${position}px)`,
          maxWidth: '333.33px',
        }}>
        {slides?.length > 0 &&
          slides.map((slide, index) => (
            <div key={slide.id} className="item">
              <img height={500} src={slide?.src} alt={slide?.title} />
            </div>
          ))}
      </Content>
      {slides?.length > 1 && (
        <Nav>
          <button onClick={handlePrev}>Anterior</button>
          <button onClick={handleNext}>Próximo</button>
        </Nav>
      )}
    </Container>
  );
};
