import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.a`
  background: none;
  color: ${({ theme }) => theme.COLORS.PINK};

  display: flex;
  align-items: center;

  gap: 8px;

  padding-right: 28px;


  > svg {
    font-size: 25px;
  }
`;