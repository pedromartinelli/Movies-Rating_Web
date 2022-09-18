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
  /* align-items: center; */
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

  > div:nth-child(5) {
    margin-bottom: 24px;
  };

  > button {
    margin-bottom: 42px;
  }

  > a {
    margin: 0 auto;
    color: ${({ theme }) => theme.COLORS.PINK};
  };
`;