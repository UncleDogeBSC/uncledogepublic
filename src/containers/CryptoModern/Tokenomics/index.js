import React from 'react';
import Zeus from 'common/assets/image/zeus-1.jpg';
import Poseidon from 'common/assets/image/poseidon.jpg';
import Plutus from 'common/assets/image/plutus.jpg';
import Favor from 'common/assets/image/favor.jpg';
import Hades from 'common/assets/image/hades.jpg';

import sticker5animated from 'common/assets/image/agency/sticker5animated.gif'
import sticker6animated from 'common/assets/image/agency/sticker6animated.gif'
import sticker8animated from 'common/assets/image/agency/sticker8animated.gif'
import sticker9animated from 'common/assets/image/agency/sticker9animated.gif'
import sticker10animated from 'common/assets/image/agency/sticker10animated.gif'

const TokenomicsSection = () => {
  const details = [
    {
      title: 'Token Tax(total)',
      detail: '11% Transaction Tax.',
      id: 'zeus',
      image: sticker5animated
    },
    {
      title: 'Liquidity',
      detail: '10% of tax goes to liquidity.',
      id: 'poseidon',
      image: sticker6animated
    },
    {
      title: 'Holders',
      detail: '1% Redistributed to Holders.',
      id: 'plutus',
      image: sticker8animated
    },
    {
      title: 'Total Supply',
      detail: '1 Quadrillion Initial Supply.',
      id: 'favour',
      image: sticker9animated
    },
    {
      title: 'More',
      detail: "Presale 50% Liquidity 35%  Burn 2.68%  Airdrop 1%"
      ,
      id: 'hades',
      image: sticker10animated
    },
    
  ]
  return (
    <div>
      <div className=" row text-center p-3 myGrid">
        {details?.map((item) => (
          <div className="col-sm-12 col-xs-12 container_foto " id='cus-col'>
            <article className="text-left">
              <h2>{item.title}</h2>
            </article>
            <div className="ver_mas text-center" id={item.id}>
              <p className="lnr lnr-eye">
                {item.detail}
              </p>
            </div>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};


export default TokenomicsSection;