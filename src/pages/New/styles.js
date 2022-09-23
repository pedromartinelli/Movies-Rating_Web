import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 115px auto;
  grid-template-areas: 
  'header'
  'content'
  ;

  > main {
    grid-area: content; 
    overflow-y: auto;
  };
`;

export const Form = styled.form`
  max-width: 1173px;
  margin: 40px auto;

  > header {
    width: 100%;
    height: auto;

    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h1 {
      font-size: 36px;
      margin: 24px 0 40px;
    };
  };


  .Inputs {
    display: flex;
    justify-content: space-between;
      
    gap: 40px;

    input {
      padding: 18px 16px;
        
    };
  };

  .Buttons {
    display: flex;
      
    margin-top: 40px;
    gap: 40px;

    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.PINK};
    };
  };
  
  > textarea {
    margin: 40px 0;
  };

  > p {
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  };

  .tags {
    display: flex;
    flex-wrap: wrap; 
    gap: 24px;

    height: auto;
    padding: 16px 16px 10px;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    
    margin: 24px 0 8px;
  
   } 
`;

export const TagsSection = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 40px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
