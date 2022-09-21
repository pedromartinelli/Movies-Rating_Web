import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center; 

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  height: 56px;

  position: relative;
  
  > button {
    border: none;
    background: none; 

    position: absolute;
    margin-top: 4px;

    color: ${({ theme }) => theme.COLORS.PINK};

    right: 16px;

    svg {
      width: 22px;
      height: 22px;
    };
  };

  .button-add {
    right: 16px;
  };

  .button-delete {
    right: 16px;
    top: 14px;
  }; 
  
    > input {
    width: 180px;
    width: ${({ isNew }) => isNew ? '220px' : '150px'};

    padding: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    };
  };

  .input-delete {
    &:focus {
      border-radius: 10px;
      box-shadow: 0 0 0 2px gray; 
      outline: none;
      transition: .2s;
    }
  };
  
  .input-add {
    outline: none;
  };
`;