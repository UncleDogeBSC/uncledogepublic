import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Box from 'common/components/Box';
import Image from 'common/components/Image';
import Card from 'common/components/Card';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';
import shape1 from 'common/assets/image/cryptoModern/Shape-1.png';
import shape2 from 'common/assets/image/cryptoModern/Shape-2.png';
import shape3 from 'common/assets/image/cryptoModern/Shape-3.png';
import shape4 from 'common/assets/image/cryptoModern/Shape-4.png';
import Newsletter2 from 'containers/CryptoModern/Newsletter2';
import cheerio from 'cheerio'
import axios from 'axios'
import uncleBoss from 'common/assets/image/agency/uncleBoss.png';
import Particles from '../../Agency/Particle';

const WorkHistory = ({ row, col, cardStyle, btnStyle }) => {
  
  const [numHolders, setNumHolders] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [telegramCounter, setTelegramCounter] = useState(0);
  const [twitterCounter, setTwitterCounter] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);


  useEffect(async () => {
    await getRealTimeData()
  }, [])

  const getRealTimeData = async () => {
    /*const data2 = await axios.post('https://cors-anywhere.herokuapp.com/https://bscscan.com/token/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152')
    .then( i => { return (i.data) } )

    //console.log(data)

    const dat = cheerio.load(data2).text()
    //console.log(dat)

    const text = 'Holders:'
    const index = dat.indexOf(text)
    const numHolders = dat.substring(index - 2, index + text.length+12).match(/\d/g).join("")
    setNumHolders(numHolders)


    data = await axios.post('https://cors-anywhere.herokuapp.com/https://poocoin.app/tokens/0xd2618bc9c9cdc40ff19e200a7d14a09799c0a152')
    .then( i => { return (i.data) } )

    //console.log(data)

    dat = cheerio.load(data).text()
    console.log(dat)*/

    axios.get(
      'https://api.coingecko.com/api/v3/coins/uncle-doge?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true')
      .then(response => {
        //console.log(response.data)
        const number = response.data.market_data.current_price.usd;
        const str = number.toString();
        //console.log(number.toFixed(parseInt(str.split('-')[1])+4))
        setCurrentPrice(number.toFixed(parseInt(str.split('-')[1])+4))
        setTelegramCounter(response.data.community_data.telegram_channel_user_count)
        setTwitterCounter(response.data.community_data.twitter_followers)
        setPriceChange(response.data.market_data.price_change_percentage_24h)
    })
  }
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <CounterUpArea>
            
              
              <Card className="card" {...cardStyle}>
                
                <h3>
                  {currentPrice}$
                </h3>
                <Text content="Current Price" />
              </Card>
              <Card className="card" src="uncleBoss"{...cardStyle}>
               
                <h3>
                  <CountUp start={0} end={priceChange} duration={5} />%
                </h3>
                <Text content="Price Change" />
                
              </Card>
              <Card className="card" {...cardStyle}>
             
                <h3>
                  <CountUp start={0} end={telegramCounter} duration={5} />
                </h3>
                <Text content="Telegram Members" />
               
              </Card>
              <Card className="card" {...cardStyle}>
              
                <h3>
                  
                  <CountUp start={0} end={twitterCounter} />
                </h3>
                

                <Text content="Twitter Followers" />
              </Card>
            </CounterUpArea>
          </Box>
          <Box className="col" {...col}>
            <FeatureBlock
            
              title={<Heading content="Real-time data" />}
              
             
             
            />
            <Image className="imagemUncle" src={uncleBoss}  />
          </Box>
        </Box>
 
      </Container>
    {/*}  <Newsletter2 />*/}
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
  },

  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;