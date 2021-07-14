import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';

import FeatureBlock from 'common/components/FeatureBlock';
import { Features } from 'common/data/CryptoModern';
import Container from 'common/components/UI/Container';
import StickyBox from "react-sticky-box";
import FundRaising from 'containers/CryptoModern/FundRaising';
import RoadMapContent1 from 'containers/CryptoModern/RoadMapContent1'
import RoadMapContent2 from 'containers/CryptoModern/RoadMapContent2'
import RoadMapContent3 from 'containers/CryptoModern/RoadMapContent3'
import Fade from 'react-reveal/Fade';

import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Timeline from 'timeline'

import SectionWrapper, { ContentWrapper } from './privacy.style';
import Illustration from 'common/assets/image/cryptoModern/illustration1.png';;


const RoadMapSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  
  return (
    <>
<SectionWrapper>
    <div style={{height: "100%",maxHeight:500, overflow: 'auto' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <StickyBox >

      <Container>

            <RoadMapContent1/>
            <RoadMapContent2/>
            <RoadMapContent3/>
            
      </Container>
      
      </StickyBox>
    
  </div>
</div>
</SectionWrapper>
    </>
  );
};

export default RoadMapSection;
