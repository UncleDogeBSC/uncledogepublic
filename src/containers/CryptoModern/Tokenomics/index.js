import React from 'react';
import Zeus from 'common/assets/image/zeus-1.jpg';
import Poseidon from 'common/assets/image/poseidon.jpg';
import Plutus from 'common/assets/image/plutus.jpg';
import Favor from 'common/assets/image/favor.jpg';
import Hades from 'common/assets/image/hades.jpg';

const TokenomicsSection = () => {
  const details = [
    {
      title: '4% of Zeus',
      detail: 'The mighty Zeus rests on his throne, ready to strike down and buy back from those who would challenge Olympus’s legacy. 4% of all transactions are used to fund the buyback power of Zeus.',
      id: 'zeus',
      image: Zeus
    },
    {
      title: '4% to Poseidon',
      detail: 'With each trade, 4% is added to the liquidity pool to calm the waters. However, to keep balance and order in Olympus, when liquidity is above 25% of the total market cap this tax will be paid to Zeus as tribute, lifting Olympus back to its proper place in the heavens, the first dynamic liquidity generation of its kind.',
      id: 'poseidon',
      image: Poseidon
    },
    {
      title: '4% of Plutus',
      detail: '4% to Plutus The God of Wealth, Plutus bestows wealth upon the worshipers of Olympus, rewarding their faith in the Omnipotent Zeus. 4% of each transaction will be converted to BUSD and sent automatically to the wallets of the followers of Zeus.',
      id: 'plutus',
      image: Plutus
    },
    {
      title: '2% of Favour',
      detail: '2% to Favour In order to further explore the full potential of Olympus, 2% will be sent to a wallet as favour for development and marketing purposes, controlled by the gods themselves.',
      id: 'favour',
      image: Favor
    },
    {
      title: 'Tribute to Hades',
      detail: 'Tribute to Hades Having been thrown out of Olympus, betrayed by his own brothers and sisters, Hades rules the underworld, feeding on the souls of the lost. After each buyback, transaction fees FOR SELLS are doubled for 30 minutes, descending to the original rate with each minute',
      id: 'hades',
      image: Hades
    },
  ]
  return (
    <div>
      <div className=" row text-center p-3">
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