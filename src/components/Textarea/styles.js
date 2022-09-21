import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.WHITE};
  
  padding: 18px 16px;

  margin-bottom: 8px;
  
  border: none;
  border-radius: 10px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  };

  &:focus {
    border-radius: 10px;
    box-shadow: 0 0 0 2px gray; 
    outline: none;
    transition: .2s;
  };
`;