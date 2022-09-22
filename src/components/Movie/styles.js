import styled from "styled-components";



export const Container = styled.button`
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.PINK_5OP};
  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 16px;

  text-align: left;

  > h1 {
    text-align: left;
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.WHITE};
  };
  
  > p {
    margin: 15px 0;
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }

  > footer {
    width: 100%;
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }
`;