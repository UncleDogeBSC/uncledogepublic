import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/cryptoModern';
import { ResetCSS } from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/CryptoModern/Navbar';
import Banner from 'containers/CryptoModern/Banner';
import CountDown from 'containers/CryptoModern/CountDown';
import Features from 'containers/CryptoModern/FeatureSection';
import RoadMap from 'containers/CryptoModern/RoadMap';
import Tokenomics from 'containers/CryptoModern/Tokenomics';
import WorkHistory from 'containers/CryptoModern/WorkHistory';
import Investment from 'containers/CryptoModern/Investment';
import FundRaising from 'containers/CryptoModern/FundRaising';
import FundRaising2 from 'containers/CryptoModern/FundRaising2';
import FundRaising3 from 'containers/CryptoModern/FundRaising3';
import Privacypolicy from 'containers/CryptoModern/Privacy';
import WalletSection from 'containers/CryptoModern/WalletSection';
import MapSection from 'containers/CryptoModern/MapSection';
import FaqSection from 'containers/CryptoModern/FaqSection';
import Newsletter from 'containers/CryptoModern/Newsletter';
import Footer from 'containers/CryptoModern/Footer';
import Tokenomics from 'containers/CryptoModern/Tokenomics';
import GlobalStyle, {
  CryptoWrapper,
  ContentWrapper,
} from 'containers/CryptoModern/cryptoModern.style';

import { ParallaxProvider } from "react-scroll-parallax";
import $ from 'jquery'; 

import { Container, Grid, Typography } from "@material-ui/core";
import SideRoadMap from "containers/CryptoModern/SideRoadMap/index";

const Main = () => {
  return (
    
      <>
      
        <Head>
          <title>Uncle Doge | Landing page</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="React, React js, Next, Next js, Super fast next js landing, Modren landing, Next js landing"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />

          <script type="text/javascript" src="dist/ResizeSensor.min.js"></script>
          <script type="text/javascript" src="dist/theia-sticky-sidebar.min.js"></script>
              
              
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            
            
<<<<<<< HEAD
=======
            <RoadMap/>
            <Tokenomics/>
>>>>>>> d472a7c62763e2ca0a1300fed34931df8fd813a0
            
            <ParallaxProvider>
              <FundRaising />
            {/*  <FundRaising2/>
              <FundRaising3/>*/}
            </ParallaxProvider>
            
            <WorkHistory />
        
          {/*  <Investment />
            <FundRaising />
           <Privacypolicy />
            <WalletSection />
            <MapSection />
            <FaqSection />*/}
         
          <Container className="container" fixed>
      <Typography
        my={12}
        className="heading"
        variant="h2"
        textAlign="center"
        color="initial"
      >
        Roadmap
      </Typography>
      <SideRoadMap />
    </Container>
          </ContentWrapper>
          <CountDown />
          <Footer />
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>

  );
};
 
export default Main;
