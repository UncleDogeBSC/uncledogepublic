import React from 'react';
import Link from 'next/link';
import Text from 'common/components/Text';
import CopyrightWrapper from './copyrightSection.style';
import data from 'common/data/Agency/';
//poocoin, dextools, cmc, twitter, telegram
const CopyrightSection = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        <li key={`profile_key_1`}>
          <a href={'https://poocoin.app/tokens/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152'} >
            <img src='/poocoin.png' width='40px'/>
          </a>  
        </li>
        <li key={`profile_key_2`}>
          <a href={'https://bscscan.com/token/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152'} >
            <img src='/bscscan.png' width='40px'/>
          </a>  
        </li>
        <li key={`profile_key_3`}>
          <a href={'https://coinmarketcap.com/currencies/uncle-doge/'} >
            <img src='/cmc.png' width='40px'/>
          </a>  
        </li>
        <li key={`profile_key_4`}>
          <a href={'https://twitter.com/UncleDogeBSC'} >
            <img src='/twitter.png' width='40px'/>
          </a>  
        </li>
        <li key={`profile_key_4`}>
          <a href={'https://t.me/UncleDogeOfficial'} >
            <img src='/telegram.png' width='40px'/>
          </a>  
        </li>
      </ul>

    </CopyrightWrapper>
  );
};

export default CopyrightSection;
