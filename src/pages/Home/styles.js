import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > main {
    padding: 0 213px;
  }
`;

export const NewMovie = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 63px 0 50px;
  font-size: 32px;    

  > button {
      display: flex;
      align-items: center;
      gap: 8px;

      padding: 16px 32px;

      background-color: ${({ theme }) => theme.COLORS.PINK};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

      border: none;
      border-radius: 8px;

      svg {
      font-size: 25px;
      padding-top: 2px;
      };
    };
`;


export const Content = styled.div`
  height: 620px;
  
  display: flex;
  flex-direction: column;

  margin-bottom: 200px;

  overflow-y: auto;
`;