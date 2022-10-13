import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: stretch;

  > img {
    flex: 1;   
    
    background-size: cover;
    opacity: calc(0.7);
  }
`;

export const Form = styled.form`
  padding: 0 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 48px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};
  };

  > p {
    font-size: 14px;
    margin-bottom: 48px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  };

  > h2 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 48px;

    color: ${({ theme }) => theme.COLORS.WHITE};    
  };

  > div:nth-child(6) {
    margin-bottom: 24px;
  };

  > button {
    margin-bottom: 42px;
  }

  > a {
    margin: 0 auto;
  };

  .inputContainer {
    > p {
      font-size: 12.5px;
      margin: -3px 10px 10px;
      color: #C0433D;    
      font-weight: 400;

      display: flex;
      align-items: center;

      gap: 5px;

      svg {
        margin-top: 2px;
      }
    }
  };

  .iconInputContainer {
    width: 100%;

    display: flex;
    align-items: center;
  
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  
    border-radius: 10px;
    margin-bottom: 8px;

    > input {
      width: 100%;
      height: 56px;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.WHITE};
      border: none;

      padding: 18px 52px;
      position: relative;
    
      &::placeholder {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      };
    };

    > input:focus {
      border-radius: 10px;
      box-shadow: 0 0 0 2px gray; 
      outline: none;
      transition: .2s;
    };

    > svg {
      position: absolute;
      margin-left: 16px;
   };
  };
`;