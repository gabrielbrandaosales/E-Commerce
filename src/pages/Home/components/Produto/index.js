import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container } from './styles';
import { Header } from '../../../../components/Header';
import { Slide } from '../Slide';

export const Produto = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState();
  React.useEffect(() => {
    axios
      .get('https://ranekapi.origamid.dev/json/api/produto/' + id)
      .then((response) => setProduct(response.data));
  }, [id]);
  return (
    <div style={{ padding: '0 30%' }}>
      <Header />
      <Container>
        <div style={{ margin: '0 1rem 0 0' }}>
          <Slide slides={product?.fotos} />
        </div>
        <div style={{ padding: '1rem' }}>
          <h1>{product?.nome}</h1>
          <p className="preco">R$ {product?.preco}</p>
          <label>{product?.descricao}</label>
        </div>
      </Container>
    </div>
  );
};
