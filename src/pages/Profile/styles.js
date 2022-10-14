import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.PINK_5OP};

    display: flex;
    align-items: center;
    padding: 0 124px;
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30PX auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  };

  > button {
    margin-top: 24px;
  }

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

      padding: 18px 20px 18px 52px;
      position: relative;
    
      &::placeholder {
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      };

      &::-ms-reveal {
        filter: invert(70%);
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

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;
  
  height: 186px;
  width: 186px;
  
  > img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }  

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    };

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    };

    &:hover {
      filter: brightness(0.9);
    };
  };
`;
