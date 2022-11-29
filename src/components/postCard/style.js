import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 20px;
  align-items: center;

  a {
    cursor: pointer;
    &:hover {
      color: #040B98;
      transition: 0.8s;
    }
  }
  h2 {
    padding-bottom: 10px;
    font-family: "Yanone Kaffeesatz", sans-serif;
    font-size: 35px;
  }

  p {
    font-size: 20px;
  }
`;
