import React from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import data from 'common/data/Agency/';

const CopyrightSection = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      
      <Text content="Copyright © 2021 Uncle Doge." />
      <Text content="All Rights Reserved" />
    </CopyrightWrapper>
  );
};

export default CopyrightSection;
