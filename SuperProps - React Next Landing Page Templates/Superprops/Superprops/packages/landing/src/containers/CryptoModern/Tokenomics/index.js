import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features } from 'common/data/CryptoModern';
import Container from 'common/components/UI/Container';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
// import uncleBoss from 'common/assets/image/agency/uncleBoss.png';
import Zeus from 'common/assets/image/zeus-1.jpg';
import Poseidon from 'common/assets/image/poseidon.jpg';
import Plutus from 'common/assets/image/plutus.jpg';
import Favor from 'common/assets/image/favor.jpg';
import Hades from 'common/assets/image/hades.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1%'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  zeusDiv: {
    height: '100%',
    width: '100%',
    // backgroundImage: "url(" + ${require("common/assets/image/zeus-1.jpg")} + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform .6s cubic-bezier(.24,1,.3,1),opacity .55s ease .25s',
    opacity: 1,
    padding: '11%',
    minHeight: '500px',
    position: 'relative',
    '&: hover': {
      transition: 'all 6s ease-in-out',
      transform: 'scale(1.2)',

    }
  },

}));

const TokenomicsSection = ({
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
  const classes = useStyles();
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


