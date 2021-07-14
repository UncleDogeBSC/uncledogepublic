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
import uncleBoss from 'common/assets/image/zeus-1.jpg';

// import './tokenomics.css'


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
    // backgroundImage: "url(" + `${require("common/assets/image/zeus-1.jpg")}` + ")",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform .6s cubic-bezier(.24,1,.3,1),opacity .55s ease .25s',
    opacity: 1,
    padding: '11%',
    minHeight: '500px',
    position: 'relative',
    '&: hover':{
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
  return (
    <div className={classes.root}>
      <Grid container alignContent='center' spacing={3} >
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/zeus-1.jpg")}` + ")"}} >
            <div className='contentDiv'>
              <div className='content'>

              <h2 className='heading'> 4% to Zeus</h2>
              <p className='extraContent'>
                The mighty Zeus rests on his throne, ready to strike down and buy back from those who would challenge Olympus’s legacy. 4% of all transactions are used to fund the buyback power of Zeus.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/poseidon.jpg")}` + ")"}} >
            <div className='contentDiv1'>
              <div className='content1'>

              <h2 className='heading1'> 4% to Poseidon</h2>
              <p className='extraContent1'>
              
With each trade, 4% is added to the liquidity pool to calm the waters. However, to keep balance and order in Olympus, when liquidity is above 25% of the total market cap this tax will be paid to Zeus as tribute, lifting Olympus back to its proper place in the heavens, the first dynamic liquidity generation of its kind.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/plutus.jpg")}` + ")"}} >
            <div className='contentDiv2'>
              <div className='content2'>

              <h2 className='heading2'> 4% to Plutus</h2>
              <p className='extraContent2'>
            
The God of Wealth, Plutus bestows wealth upon the worshipers of Olympus, rewarding their faith in the Omnipotent Zeus. 4% of each transaction will be converted to BUSD and sent automatically to the wallets of the followers of Zeus.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/favor.jpg")}` + ")"}} >
            <div className='contentDiv3'>
              <div className='content3'>

              <h2 className='heading3'> 4% to Favour</h2>
              <p className='extraContent3'>
            
              
In order to further explore the full potential of Olympus, 2% will be sent to a wallet as favour for development and marketing purposes, controlled by the gods themselves.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/hades.jpg")}` + ")"}} >
            <div className='contentDiv4'>
              <div className='content4'>

              <h2 className='heading4'> Tribute to Hades</h2>
              <p className='extraContent4'>
            
Having been thrown out of Olympus, betrayed by his own brothers and sisters, Hades rules the underworld, feeding on the souls of the lost. After each buyback, transaction fees FOR SELLS are doubled for 30 minutes, descending to the original rate with each minute
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
     

      </Grid>
    </div>
  );
};


export default TokenomicsSection;


