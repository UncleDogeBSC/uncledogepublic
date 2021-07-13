import React from 'react';
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

const WorkHistory = ({ row, col, cardStyle, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
               
                <h3>
                  <CountUp start={0} end={75000} />+
                </h3>
                <Text content="MarketCap" />
              </Card>
              <Card className="card" {...cardStyle}>
                
                <h3>
                  <CountUp start={0} end={80} duration={5} />
                </h3>
                <Text content="Price" />
              </Card>
              <Card className="card" {...cardStyle}>
               
                <h3>
                  <CountUp start={0} end={9350} duration={5} />+
                </h3>
                <Text content="Holders" />
              </Card>
              <Card className="card" {...cardStyle}>
             
                <h3>
                  <CountUp start={0} end={30000} duration={5} />+
                </h3>
                <Text content="Telegram Members" />
              </Card>
            </CounterUpArea>
          </Box>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content="Join The Army Now " />}
              description={
                <Text content="Join the army and enjoy the benefits from our thoroughly tested and proven tokenomics system. It is designed to provide a healthy chart and reward loyal holders long term. " />
              }
             
            />
          </Box>
        </Box>
      </Container>
      <Newsletter2 />
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