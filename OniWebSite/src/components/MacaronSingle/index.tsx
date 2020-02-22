import React, { useState } from 'react';
import {
  MacaronSingleWrapper,
  ImageWrapper,
  Title,
  Description,
  AddIconWrapper,
} from './styled';
import AddIcon from '@material-ui/icons/Add';
import colors from '@constants/colors';
import { IProduct, ProductType } from '@constants/products';

interface IProps extends IProduct {
  onClick: (item: IProduct) => void;
}
export function MacaronSingle({
  name,
  description,
  imageUrl,
  imageCutUrl,
  onClick,
}: IProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseOver = () => {
    setMouseOver(true);
  };

  const onMouseOut = () => {
    setMouseOver(false);
  };

  return (
    <MacaronSingleWrapper
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={() =>
        onClick({
          name,
          description,
          imageUrl,
          imageCutUrl,
          type: ProductType.Macaron,
        })
      }
    >
      <AddIconWrapper visible={mouseOver}>
        <AddIcon style={{ fontSize: 40, color: colors.primary.white }} />
      </AddIconWrapper>
      <ImageWrapper src={mouseOver ? imageCutUrl : imageUrl} />
      <Title>{name}</Title>
      <Description>{description}</Description>
    </MacaronSingleWrapper>
  );
}