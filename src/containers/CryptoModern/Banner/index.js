import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  DiscountLabel,
  BannerImage,
  ButtonGroup,
} from './banner.style';
import Link from 'next/link'  
import uncleBoss from 'common/assets/image/agency/uncleBoss.png';
import bannerImg from 'common/assets/image/cryptoModern/banner-bg.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up>
            
          </Fade>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Uncle Doge wants you in his army."
              style={{color:"#e5a90d"}}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Uncle Doge is the best variant of Doge-Themed coins yet! It is designed to incentivize long term holders."
              style={{color:"white"}}
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <Link href="https://swap.uncle-doge.com/#/swap" offset={84}>
                <Button className="primary" title="Uncle Swap" />
              </Link>
              <Link href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152" offset={84}>
                <Button
                  className="text"
                  variant="textButton"
                  title="PancakeSwap"
                />
              </Link>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage style={{width:"700px"}}>
          <Fade in delay={100}>
            <Image src={uncleBoss} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
