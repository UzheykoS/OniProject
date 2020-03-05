import styled from 'styled-components';
import { BREAKPOINT } from '@constants';
import colors from '@constants/colors';

interface IProductsNavBarWrapper {
  isSticky?: boolean;
}

export const ProductsNavBarWrapper = styled.div<IProductsNavBarWrapper>`
  z-index: 1;
  position: absolute;
  left: 130px;
  top: 250px;

  ${({ isSticky }) =>
    isSticky &&
    `
      top: 50px;
      position: fixed;
    `}
`;

export const ProductsNavBarWrapperMobile = styled.div<IProductsNavBarWrapper>`
  z-index: 1;
  top: 100px;

  ${({ isSticky }) =>
    isSticky &&
    `
      top: 78px;
      position: fixed;
      width: 100%;
      background-color: ${colors.primary.white};
    `}
`;

export const ProductsNavBarMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;
`;

export const RoutesList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${BREAKPOINT}) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

interface IRoutesListItem {
  active?: boolean;
}

export const RoutesListItem = styled.li<IRoutesListItem>`
  margin: 10px 25px;
  height: 100%;
  align-items: center;
  display: flex;
  a {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333333;
    text-decoration: none;
    margin-left: 35px;
  }
  &:hover {
    a {
      color: #edb92c;
    }
  }
  @media (max-width: ${BREAKPOINT}) {
    margin: 5px 25px 2px 25px;
  }
  ${({ active }) =>
    active &&
    `
    a {
      color: #edb92c;
      margin: 0;
    }
    @media (max-width: ${BREAKPOINT}) {
      border-bottom: 3px solid #edb92c;
    }
  
    @media (min-width: ${BREAKPOINT}) {
      border-left: 3px solid #edb92c;
      a {
        margin-left: 32px;
      }
    }
    `}
`;
