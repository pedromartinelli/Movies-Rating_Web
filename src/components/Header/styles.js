import styled from "styled-components";

import { Link } from "react-router-dom";


export const Container = styled.div`
  grid-area: header;
  
  width: auto;
  height: 116px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  gap: 64px; 
  padding: 0 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};

  > div:nth-child(2) {
    margin-bottom: 0;
    width: 53%; 
    
  }
`;

export const HomeNav = styled.a`

  color: ${({ theme }) => theme.COLORS.PINK};
  font-weight: 700;
  line-height: 32px;

  > h1 {
  font-size: 24px;

  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 11px;

  > div {
    display: flex;
    flex-direction: column;

    line-height: 22px;

    align-items: flex-end;

    > strong {
      width: 126px;
    }

    > span {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 14px;
    }
  };

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  };
`;