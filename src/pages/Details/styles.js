import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas: 
  'header'
  'content' ;

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  max-width: 1173px;
  margin: 40px auto 0;

  display: flex;
  flex-direction: column;
  


  > p {
    font-size: 16px;
    margin-top: 40px;
    line-height: 21px;
    text-align: justify;
  };

  > button {
    background-color: transparent;
    padding: 0;
    margin: 20px 0 0;

    cursor: context-menu;

    &:hover {
        filter: none;
    };
    
    span {
      background-color: ${({theme}) => theme.COLORS.PINK_5OP};
    };

    h1, p, div {
      display: none;
    };
  };
`;

export const Section = styled.section`
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 19px;
   
    > div {
      svg {
        width: 20px;
        height: 20px;
        margin-top: 8px;
      };
    };
    
    > h1 {
      font-size: 36px;
      font-weight: 500;
      margin: 24px 0;
    };
  };

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    
    > img {
      height: 20px;
      width: 20px;
      border-radius: 50%;

      margin-right: 8px;
    };

    > svg {
      margin-left: 15px;
      margin-right: 6px;

      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.PINK};
    };
  };
  
`;
