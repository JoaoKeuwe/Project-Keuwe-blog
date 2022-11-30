import styled from "styled-components";

export const PostContainer = styled.div`
  padding-bottom: 30px;
  align-items: center;

  a {
    cursor: pointer;
    &:hover {
      color: #3C09BB;
      transition: 0.2s;
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
