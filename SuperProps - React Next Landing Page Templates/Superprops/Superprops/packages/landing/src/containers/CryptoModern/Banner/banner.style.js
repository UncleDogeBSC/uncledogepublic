import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 100px;
  min-height: 802px;
  position: relative;
  overflow: hidden;
  background-image: transparent;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 1099px) {
    padding-top: 120px;
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 120px;
    min-height: 100%;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      min-height: 100%;
    }
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
`;

export const BannerContent = styled.div`
  max-width: 425px;
  width: 100%;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {
    font-size: 48px;
    line-height: 1.25;
    font-weight: 400;
    color: ${themeGet('colors.menu', '#0D233E')};
    margin-bottom: 24px;
    letter-spacing: -0.025em;
    @media only screen and (max-width: 1440px) {
      font-size: 38px;
      margin-bottom: 20px;
    }
  }

  p {
    color: ${themeGet('colors.paragraph', '#496b96')};
    font-size: 16px;
    line-height: 33px;
    font-weight: 400;
  }
`;

export const DiscountLabel = styled.div`
  display: flex;
  border-radius: 4em;
  background-color: rgb(26, 29, 95);
  box-shadow: 0px 5px 15px 0px rgba(22, 53, 76, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.03);
  padding: 7px 25px;
  margin-bottom: 15px;
  width: 80%;
  @media (max-width: 767px) {
    padding: 7px 15px;
    width: 100%;
  }
  .discountAmount {
    font-size: 14px;
    color: rgb(64, 224, 219);
    margin-bottom: 0;
    margin-right: 0.6em;
    font-weight: 700;
  }
  .discountText {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.902);
    margin-bottom: 0;
    font-weight: 700;
  }
`;

export const BannerImage = styled.div`
  flex-shrink: 0;
  width: calc(100% - 425px);
 
  img {
    margin-left: 80px;
    @media only screen and (max-width: 1600px) {
      margin-left: 50;
    }
    @media only screen and (max-width: 480px) {
      max-width: 70%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 0px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    border-radius:5px;
    background-image: linear-gradient(to right, #e3b640, #e5a90d 95%);
    &:hover {
      box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
    }

    &.primary {
      border-radius:5px;
      background-image: linear-gradient(to right, #e3b640, #e5a90d 95%);
     
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
      }
    }

    &.text {
      margin-left: 15px;
      color: #fff;
      border: 0px solid rgba(255, 255, 255, 0.302);
    }
  }
`;

export default BannerWrapper;
