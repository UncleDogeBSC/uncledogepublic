import React from 'react';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './fundRaising.style';
import FundGraphImg from 'common/assets/image/cryptoModern/fund-graph.png';
import GraphFeatureImg from 'common/assets/image/cryptoModern/graph-feature.png';
import Card from 'common/components/Card';
import sticker3 from 'common/assets/image/cryptoModern/sticker3.gif';
import shape1 from 'common/assets/image/cryptoModern/Picture1.png';
import shape2 from 'common/assets/image/cryptoModern/Picture2.png';
import shape3 from 'common/assets/image/cryptoModern/Picture3.png';

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="fund">
      <Container>
        <ContentWrapper>
          
 
          <div className="content" >
         {/* <Heading content="OUR NEXT STEPS" /> */}
          <div style={{display:"flex", verticalAlign:"center",marginTop:"0px"}} width="inherit"  marginTop="0px" alignItems="center"  >
            
                <Image src={shape2} alt="Shape 2"style={{width:"100px"}} marginTop="0px"/>
              
                  <Heading content="Broad Awareness Marketing" style={{color:"white"}}/>
           </div>
            
             
                
                
                <Text content="
The previous oal here was to get listed on Coin Gecko and Coin Market Cap, both of which we did in 5 days!

Our next push is a broad awareness campaign, ie: billboards, influencers from all platforms etc to increase the virality of the project."style={{color:"white"}} />
             
          </div>
          <div className="image">
          <Image src={sticker3} alt="Graph Feature Image" style={{width:"350px", borderRadius:"200px"}} />
          </div>
          <div className="gradientDiv"> </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
    
    
  );
  
};

export default DesignedAndBuilt;
