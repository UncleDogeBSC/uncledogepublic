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

import WorkHistory from 'containers/CryptoModern/WorkHistory';
import SGORoadMap from 'containers/CryptoModern/SGORoadMap';
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
           <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
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


            <RoadMap/>
            <Tokenomics/>

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
          </ContentWrapper>
          <CountDown />
          <Footer />
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>

  );
};

export default Main;
