import styled from "styled-components";

export const PostContainer = styled.div`
  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background: #2c2c2c;

  font-size: 1.3rem;
  border-radius: 1.2rem;
  border-width: 0;

  &:hover {
    background: #1c0061;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;
