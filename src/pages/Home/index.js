import React from 'react';
import axios from 'axios';
import { Img, Container, Item } from './styles';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';

export const Home = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <div style={{ padding: '0 30%' }}>
      <Header />
      <Container>
        {products.map((product) => {
          return (
            <Item key={product.id}>
              <Link to={`produto/${String(product.id).toLowerCase()}`}>
                <Img
                  src={product.fotos[0].src}
                  alt={product.fotos[0].titulo}
                  width={200}
                  height={300}
                />
                <p>{product.nome}</p>
              </Link>
            </Item>
          );
        })}
      </Container>
    </div>
  );
};
