import React from 'react';
import { Title, Description } from './styled';
import { IProduct } from '@constants/products';
import { ProductImageWrapper } from '../ProductImageWrapper';
import { IProductSingleWrapper, ProductSingleWrapper } from '../styled';
import { Button } from '@common/Button';

interface IProps extends IProductSingleWrapper {
  product: IProduct;
  showButton: boolean;
  onClick: (item: IProduct) => void;
}

export function CheesecakeSingle({
  product,
  height,
  onClick,
  showButton,
}: IProps) {
  return (
    <ProductSingleWrapper height={height || 24}>
      <ProductImageWrapper height={200} src={product.imageUrl} />
      <Title>{`${product.id}   ${product.price} грн`}</Title>
      <Description>{product.fullDescription}</Description>
      {showButton && (
        <Button rounded onClick={() => onClick(product)}>
          ДОБАВИТЬ
        </Button>
      )}
    </ProductSingleWrapper>
  );
}