import styled from 'styled-components';
import BannerBG from 'common/assets/image/cryptoModern/get-start.png';

const NewsletterWrapper = styled.div`
  position: relative;
  background:transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 30px 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  z-index: 1;
  margin-top: 0px;
  margin-bottom:100px;
  @media (max-width: 1220px) {
    padding: 35px 40px;
  }
  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 575px) {
    padding: 35px 20px;
    margin-top: 50px;
  }

  .container {
    display: flex;
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

export const ContactFormWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1220px) {
    width: 420px;
  }
  @media (max-width: 575px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    button {
      width: 100%;
    }
  }

  .email_input {
    flex-grow: 1;
    margin-right: 20px;

    @media (max-width: 575px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
    }
    &.is-material {
      &.is-focus {
        label {
          font-size: 14px;
          color: #fff;
        }
        .highlight {
          background: #fff;
          height: 1px;
        }
      }
    }

    .highlight {
      background: rgba(255, 255, 255, 0.4);
    }

    input {
      background: transparent;
      font-size: 17px;
      font-weight: 300;
      color: #fff;
      padding: 10px 15px;
    
      @media (max-width: 575px) {
        height: 48px;
      }
    }

    label {
      font-size: 17px;
      color: #fff;
      font-weight: 400;
      padding-left: 10px;
      top: 5px;
      pointer-events: none;
    }
  }
  .reusecore__button {
    background-color: transparent;
    color: #03103b;
    font-size: 14px;
    letter-spacing: -0.1px;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    text-transform: uppercase;
    &:hover {
      box-shadow: #transparent ;
    }
  }
`;

export default NewsletterWrapper;
