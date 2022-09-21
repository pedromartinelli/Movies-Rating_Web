import styled from "styled-components";

export const Container = styled.span`
  font-size: 12px;
  line-height: 14px;

  border-radius: 8px;
  padding: 5px 16px;

  background-color: ${({theme}) => theme.COLORS.GRAY_500};
  color: ${({theme}) => theme.COLORS.WHITE};
`;