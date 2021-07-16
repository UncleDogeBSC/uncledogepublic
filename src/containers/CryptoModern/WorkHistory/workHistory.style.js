import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import uncleBoss from 'common/assets/image/agency/wowpatterns-export4.png';
const WorkHistoryWrapper = styled.section`
  padding: 70px 0 80px;
  overflow: hidden;
  background-image: url('common/assets/image/agency/uncleBoss.png');
  @media (max-width: 990px) {
    padding: 50px 0 60px 0;
  }
  @media (max-width: 480px) {
    padding: 50px 0 0px 0;
  }
  
  .feature__block {
    padding-left: 132px;
    margin-top: -120px;
    @media only screen and (max-width: 1200px) {
      padding-right: 32px;
      padding-left: 15px;
    }
    @media only screen and (max-width: 991px) {
      padding-right: 0;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 40px;
      margin-top: 0;
    }
    h2 {
      font-size: 40px;
      line-height: 1.2;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      color: #fff;
      text-shadow: #050404 20px 0 10px;
      max-width: 270px;
      @media only screen and (max-width: 1440px) {
        font-size: 38px;
        max-width: 100%;
      }
      @media only screen and (max-width: 767px) {
        font-size: 25px;
        max-width: 100%;
      }
    }
    p {
      color: #496b96;
      
      font-size: 16px;
      line-height: 33px;
      font-weight: 400;
    }
    .reusecore__button {
      transition: all 0.3s ease;
      color: #fff;
      margin-left: 0;
      padding-left: 0;
      justify-content: flex-start;
      .flaticon-next {
        margin-top: 3px;
      }
    }
  }
  .imagemUncle{
    position:fixed;
    bottom: 0; right: 0; border: 0;
    width:100px;
    @media only screen and (max-width: 767px) {
      width:40px;
    }
  }
 
  }
  
`;

const CounterUpArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:40px;
  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
    margin-left: -25px;
  }
  @media only screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .particle {
    position: absolute;
    z-index:-10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    
    overflow: hidden;
    @media (max-width: 990px) {
      display: none;
    }
    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }
  
  .card {
    width: calc(50% - 25px);
    margin-left: 25px;
    
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background-image:url(${uncleBoss});
    
    cursor: pointer;
    box-shadow: 0px 16px 57px 0px rgba(255, 255, 255, 0.2);
    @media (max-width: 767px) {
      width: calc(50% - 13px);
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }

    &:hover {
      
      box-shadow: 0px 16px 57px 0px rgba(255, 255, 255, 0.7);
    }

    h3 {
      font-size: 25px;
      font-weight: 400;
      margin: 30px 0 10px;
      
      color: ${themeGet('colors.white', '#fff')};
      @media (max-width: 767px) {
        font-size: 15px;
        margin-bottom: 10px;
      }

      @media only screen and (max-width: 991px) {
        font-size: 15px;
        margin-bottom: 10px;
      }
      @media only screen and (max-width: 1200px) {
        font-size: 15px;
        margin-bottom: 10px;
      }
    }

    p {
      color: rgba(255, 255, 255);
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
      @media (max-width: 990px) {
        font-size: 14px;
        text-align: center;
      }
    }

    img {
      opacity: 0.2;
    }

    &:nth-child(even) {
      position: relative;
      top: -70px;
    }
  }
`;

export { CounterUpArea };
export default WorkHistoryWrapper;
