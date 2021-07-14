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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3} md={3}>
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
        <Grid item xs={12} lg={3} md={3}>
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
        <Grid item xs={12} lg={3} md={3}>
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
        <Grid item xs={12} lg={3} md={3}>
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
     

      </Grid>
    </div>
  );
};


export default TokenomicsSection;


