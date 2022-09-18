import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  
  color: ${({ theme }) => theme.COLORS.TAGS_FILL};
  font-weight: 500;

  border: none;
  border-radius: 10px;

  &:disabled {
    opacity: 0.5;
  }

`;