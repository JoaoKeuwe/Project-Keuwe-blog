import styled from "styled-components";

export const PostContainer = styled.div`
  padding-bottom: 30px;
  align-items: center;

  a {
    cursor: pointer;
    &:hover {
      color: #040b98;
      transition: 0.3s;
    }
  }
  h2 {
    font-size: 35px;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
  }
`;
