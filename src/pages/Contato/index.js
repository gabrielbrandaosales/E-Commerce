import React from 'react';
import { Head } from '../../components/Head';
import { Header } from '../../components/Header';
import { Container } from './styles';

export const Contato = () => {
  return (
    <div style={{ padding: '0 30%' }}>
      <Head title="Contato" />
      <Header />
      <Container>
        <div style={{ margin: '0 2rem 0 0' }}>
          <img
            src="https://i.pinimg.com/originals/b6/4e/df/b64edf6cccdfad7464f781afbb4131f4.jpg"
            alt="contato"
            height="700px"
          />
        </div>
        <div>
          <h3>Entre em contato.</h3>
          <p>__ gabriel@gbs.com</p>
          <p>__ 98999-9999</p>
          <p>__ Avenida Logo ali, 16</p>
        </div>
      </Container>
    </div>
  );
};
