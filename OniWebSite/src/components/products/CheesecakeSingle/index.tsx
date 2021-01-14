import React from 'react';
import { Title, Description, Price } from './styled';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';
import { IProductSingleWrapper, ProductSingleWrapper } from '../styled';
import { Button } from '@common/Button';
import { Flex } from '@styles/styled';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  showButton: boolean;
  onClick: (item: IProduct) => void;
}

export function CheesecakeSingle({ product, onClick, showButton }: IProps) {
  return (
    <ProductSingleWrapper>
      <div style={{ flexGrow: 1 }}>
        <ProductImageWrapper height={200} src={product.imageUrl} />
      </div>
      <Title>{`${product.id}`}</Title>
      <Description>{product.fullDescription}</Description>
      {showButton && (
        <Flex
          justifyBetween
          direction={'column'}
          style={{ flexGrow: 1, marginBottom: 20 }}
        >
          <Price>{`${product.price} грн`}</Price>
          <Button rounded onClick={() => onClick(product)}>
            В корзину
          </Button>
        </Flex>
      )}
    </ProductSingleWrapper>
  );
}