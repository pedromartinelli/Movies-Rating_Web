import styled from "styled-components";

export const Container = styled.div`
  width: auto;

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
`;
