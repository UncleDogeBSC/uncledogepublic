import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0 20px 0;
  
  
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:rgba(0,0,0,0.2);
    border: solid 19px rgba(0,0,0,0.1);
    border-radius:50px;
    
  }
  .feature__block {
    position: relative;
    height: 100%;
    display: flex;
    background:rgba(0,0,0,0.5)
   
    ;
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 0px;
    
    
    @media (max-width: 500px) {
      padding: 15px 0;
      &:hover {
        background-image: none;
      }
    }
  }
`;

export default FeatureSectionWrapper;
