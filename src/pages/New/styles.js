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

  .Buttons {
    display: flex;
      
    margin-top: 40px;
    gap: 40px;
    
    button:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.PINK};
    };
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
  
  .Inputs {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    input {
      padding: 18px 16px;
    };
  };


  .inputContainer {
    width: 100%;
    margin-bottom: 40px;
    
    > div {    
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      border-radius: 10px;
      
      > input {
        width: 100%;
        height: 56px;
  
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: none;
  
        padding: 18px 16px;
      
        &::placeholder {
          color: ${({ theme }) => theme.COLORS.GRAY_200};
        };
      };

      > input:focus,
        textarea:focus {
          border-radius: 10px;
          box-shadow: 0 0 0 2px gray; 
          outline: none;
          transition: .2s;
      };
    };
    
    > textarea{
      width: 100%;
      height: 150px;

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.WHITE};
  
      padding: 18px 16px;
  
      border: none;
      border-radius: 10px;
      resize: none;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      };
    };
    
    > p {
      font-size: 12.5px;
      margin: 1px 10px 10px;
      color: #C0433D;    
      font-weight: 400;

      display: flex;
      align-items: center;

      gap: 5px;

      svg {
        margin-top: 2px;
      }
    };

    
  };
`;

export const TagsSection = styled.div`
  width: 100%;
  height: 50px;

  margin-top: 40px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
