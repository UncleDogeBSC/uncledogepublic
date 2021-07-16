import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './fundRaising.style';
import FundGraphImg from 'common/assets/image/cryptoModern/fund-graph.png';
import GraphFeatureImg from 'common/assets/image/cryptoModern/graph-feature.png';
import Card from 'common/components/Card';
import sticker4 from 'common/assets/image/cryptoModern/sticker4.gif';
import shape1 from 'common/assets/image/cryptoModern/Picture1.png';
import shape2 from 'common/assets/image/cryptoModern/Picture2.png';
import shape3 from 'common/assets/image/cryptoModern/Picture3.png';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="fund">
      <Container>
        <ContentWrapper>
        <div className="image">
          <Image src={sticker4} alt="Graph Feature Image" style={{width:"350px", borderRadius:"400px"}} />
          </div>
 
          <div className="content" >
         {/* <Heading content="OUR NEXT STEPS" /> */}
          <div style={{display:"flex", verticalAlign:"center",marginTop:"0px"}} width="inherit"  marginTop="0px" alignItems="center"  >
            
                <Image src={shape3} alt="Shape 3"style={{width:"100px"}} marginTop="0px"/>
              
                  <Heading content="30,000 Holders" style={{color:"white"}}/>
           </div>
            
             
              
                
                <Text content="
We have already set 4 goals for holders prior to this, 1,000, 5,000, 10,000, and 20,000

All of them we crushed in less than 5 Days!! Next stop is 30,000 Holders

And then 50,000 Holders!" style={{color:"white"}}/>
             
          </div>
          
          <div className="gradientDiv"> </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
    
    
  );
  
};

export default DesignedAndBuilt;
