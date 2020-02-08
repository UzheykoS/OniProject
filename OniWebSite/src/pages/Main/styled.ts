import styled from 'styled-components';

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 80px 0px;
  justify-content: center;
  border: 1px solid #cccccc;
`;

export const ImageSection = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;

export const TextSection = styled.div`
  width: 500px;
  padding-left: 60px;
  font-size: 15px;
  h2 {
    line-height: 27px;
    margin-bottom: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 20px;
    color: #6b6b6b;
  }
  p {
    color: #6b6b6b;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const ImagesContainer = styled.div`
  margin-bottom: 25px;

  width: 100%;
  height: 802px;
  object-fit: cover;
  clip-path: path(
    'M792.692173,984 C1020.11144,984 1067.5,822 1185.35714,822 C1308.24715,822 1298.60708,864.608806 1392.84282,864.608806 C1487.07855,864.608806 1487.07855,762.477124 1632.77761,799.919516 C1626.58087,610.712217 1623.4825,485.751032 1623.4825,425.035958 C1623.4825,348.268378 1907.6608,214.653508 1690.23206,164.345403 C1472.80333,114.037298 1172.42833,82.9210879 840.643265,82.9210879 C570.308476,82.9210879 320.82623,5.07153241 120.073637,39.9363168 C-49.493954,69.3851891 77.5875416,-168.788322 77.5875416,258.951753 C77.5875416,303.704866 -49.5179224,380.927665 21.6432647,505.777853 C50.1210749,555.741324 92.389737,766.543072 222.492938,802.999666 C245.104233,809.335643 277.347526,812.195166 305.143265,812.195166 C560.143265,812.195166 563.192173,984 792.692173,984 Z'
  );
`;

export const BackgroundImage = styled.img`
  height: auto;
  width: 100%;
`;
