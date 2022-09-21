import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({theme}) => theme.COLORS.PINK_5OP};

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

    background-color: ${({theme}) => theme.COLORS.PINK};
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
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    };

    &:hover {
      filter: brightness(0.9);
    };
  };


`;