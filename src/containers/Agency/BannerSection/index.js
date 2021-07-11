import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Fade from 'react-reveal/Fade';
import Image from 'common/components/Image';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';

import sticker1 from 'common/assets/image/agency/sticker1.png';
const BannerSection = ({
  row,
  row2,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <Button title="Buy" color ="#e5a90d" {...btnStyle}/>
      <Button
        title="WATCH WORKS"
        variant="textButton"
        
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      />
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Particles />
      <Container >
        <Box className="row"  {...row}>
          <Box className="col" {...col}>
          {/*  <DiscountLabel>
              <Text content="25% Discount" {...discountAmount} />
              <Text content="on every first project budget" {...discountText} />
            </DiscountLabel>

          */}
            <FeatureBlock
              title={
                <Heading
                  content="Uncle Doge wants you in his army."
                  {...title}
                />
              }
              description={
                <Text
                  content="Uncle Doge is the best variant of Doge-Themed coins yet! It is designed to incentivize long term holders."
                  {...description}
                  
                />
              }
              button={<ButtonGroup />}
            />
            
          </Box>
          
          <Box className="row">
              <Fade top delay={30}>
                <Image src={sticker1} style={{width:"450px",height:"350px"}} alt="Feature Image"/>
              </Fade>
              </Box>
        </Box>
      </Container>
      
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    
    mr: '-15px',
    alignItems: 'center',
  },
  row2: {
    
   width:"50%",
    alignItems: 'right',
    
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    
    fontSize: '14px',
    fontWeight: '500',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px',
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span',
  },
};

export default BannerSection;
