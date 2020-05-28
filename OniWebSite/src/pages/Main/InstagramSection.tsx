import React, { useEffect } from 'react';
import {
  InstagramContainer,
  InstagramDescriptionWrapper,
  DescriptionLink,
} from './styled';
import { useLoading } from '@hooks/useLoading';
import { SEPARATORS } from '@utils/Helper';
import { Typography } from '@material-ui/core';
import { IMainPageSectionProps } from '.';
import { Flex } from '@styles/styled';
const Instafeed = require('instafeed.js');

export function InstagramSection({ isMobile }: IMainPageSectionProps) {
  const { showLoading, closeLoading } = useLoading();
  useEffect(() => {
    showLoading();
    const userFeed = new Instafeed({
      get: 'user',
      userId: process.env.INSTAGRAM_USER_ID,
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      accessToken: process.env.INSTAGRAM_ACCESS_TOKEN,
      resolution: 'standard_resolution',
      template:
        '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      sortBy: 'most-recent',
      limit: 6,
      links: false,
      success: () => {
        closeLoading();
      },
    });
    userFeed.run();
  }, []);

  return (
    <InstagramContainer isMobile={isMobile}>
      <Typography variant='h3' gutterBottom>
        ИЩИТЕ НАС В
      </Typography>
      <Typography
        variant='h1'
        gutterBottom
        style={isMobile ? { fontSize: 26, lineHeight: '38px' } : {}}
      >
        Instagram
      </Typography>

      <InstagramDescriptionWrapper>
        <Typography variant='body1' gutterBottom>
          Дневник кондитерской жизни. {isMobile ? '' : '\n'}
          Подпишитесь, если хотите заглянуть за кулисы нашей кухни.
        </Typography>
        {!isMobile && (
          <DescriptionLink target='_blank' href='https://www.instagram.com'>
            {`${SEPARATORS.DASH} В INSTAGRAM`}
          </DescriptionLink>
        )}
      </InstagramDescriptionWrapper>
      <div id='instafeed' />
      {isMobile && (
        <Flex flexEnd>
          <DescriptionLink target='_blank' href='https://www.instagram.com'>
            {`${SEPARATORS.DASH} В INSTAGRAM`}
          </DescriptionLink>
        </Flex>
      )}
    </InstagramContainer>
  );
}
