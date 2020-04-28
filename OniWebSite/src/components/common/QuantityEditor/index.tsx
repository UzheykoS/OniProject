import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { QuantityEditorWrapper } from './styled';
import colors from '@constants/colors';
import { IconButton, Typography } from '@material-ui/core';

interface IProps {
  quantity: number;
  handleIncreaseQuantity: any;
  handleDecreaseQuantity: any;
}

const QuantityEditor = ({
  quantity,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}: IProps) => {
  return (
    <QuantityEditorWrapper>
      <IconButton
        onClick={handleDecreaseQuantity}
        size='small'
        style={{
          backgroundColor: colors.primary.grey,
        }}
      >
        <RemoveIcon style={{ fontSize: 28 }} />
      </IconButton>
      <Typography variant='body1' style={{ margin: '0px 20px' }}>
        {quantity}
      </Typography>
      <IconButton
        size='small'
        onClick={handleIncreaseQuantity}
        style={{
          backgroundColor: colors.primary.gold,
          color: colors.primary.white,
        }}
      >
        <AddIcon style={{ fontSize: 28 }} />
      </IconButton>
    </QuantityEditorWrapper>
  );
};

export default QuantityEditor;
