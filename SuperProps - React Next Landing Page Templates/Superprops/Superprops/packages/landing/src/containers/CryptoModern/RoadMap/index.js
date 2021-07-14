import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features } from 'common/data/CryptoModern';
import Container from 'common/components/UI/Container';
import StickyBox from "react-sticky-box";

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
    <div style={{ height: 80, overflow: 'auto' }}>
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
    <StickyBox style={{ border: '3px solid green' }}>Sidebar</StickyBox>
    <div style={{ height: 150, border: '3px solid blue' }}>Main Content</div>
  </div>
</div>
    </>
  );
};


export default RoadMapSection;
