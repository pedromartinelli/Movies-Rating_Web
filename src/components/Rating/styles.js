import styled from "styled-components";

export const Container = styled.div`

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    height: 12px;
    width: 12px;
    margin-right: 6px;
  }

  .checked {
    fill: ${({ theme }) => theme.COLORS.PINK};
  }
`;