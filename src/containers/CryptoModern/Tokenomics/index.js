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
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker5animated.gif")}` + ")"}} >
            <div className='contentDiv'>
              <div className='content'>

              <h2 className='heading'> Total</h2>
              <p className='extraContent'>
                Uncle Doge's total tax is 11%.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker6animated.gif")}` + ")"}} >
            <div className='contentDiv1'>
              <div className='content1'>

              <h2 className='heading1'>Liquidity</h2>
              <p className='extraContent1'>
              
Uncle Doge gives 1% of the trade for the liquidity pool.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker7animated.gif")}` + ")"}} >
            <div className='contentDiv2'>
              <div className='content2'>

              <h2 className='heading2'>Holders</h2>
              <p className='extraContent2'>
            
Uncle Doge gives 1% of the transaction to everyone in his family. 
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker8animated.gif")}` + ")"}} >
            <div className='contentDiv3'>
              <div className='content3'>

              <h2 className='heading3'> Total Supply</h2>
              <p className='extraContent3'>
            
              
Uncle Doge started with 1 Quadrillion in Initial Supply.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker9animated.gif")}` + ")"}} >
            <div className='contentDiv4'>
              <div className='content4'>

              <h2 className='heading4'> Presale/<br/>Liquidity</h2>
              <p className='extraContent4'>
            
Presale 50%. <br/> Liquidity 35%.
              </p>
              </div>
            </div>
          </div>
            </div>
        </Grid>
        <Grid item xs={12} lg={2} md={3}>
          <div className='wrapper'>
          <div className='zeusDiv' style={{backgroundImage: "url(" + `${require("common/assets/image/agency/sticker10animated.gif")}` + ")"}} >
            <div className='contentDiv1'>
              <div className='content1'>

              <h2 className='heading1'> Burn/Airdrop</h2>
              <p className='extraContent1'>
              
2.68% Burn.<br/>  1% Airdrop.
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


