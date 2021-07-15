import styled from 'styled-components';

const CopyrightWrapper = styled.div`
  ul {
    display: flex;
    align-items: center;
    li {
      margin: 0 12px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      a {
        color: #ffffff;
      }
    }
    &:hover {
      li {
        a {
          &:not(:hover) {
            opacity: 0.4;
          }
        }
      }
    }
  }
  p {
    color: #ffffff;
    font-size: 16px;
    margin: 0px 0 0;
  }
`;

export default CopyrightWrapper;
