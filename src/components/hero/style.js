import styled from "styled-components";
import heroImage from "../../images/imageHero.jpg";

export const HeaderHero = styled.header`
  background: linear-gradient(
  0deg,
  rgba(100, 3,155, 0.712),
  rgba(47, 46, 47, 0.375)
  ),
    url(${heroImage});
  height: 20rem;
  background-size: cover;
  background-position: center;

  padding: 1rem;
  position: relative;
  border-bottom: 1px solid black;

  & > div {
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 2rem;
      color: #fff;
      margin-top: -3em;
      margin-bottom: 3em;
    }
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

export const NavOptions = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    transition: 0.5s;
    
    &:hover {
      scale: 1.5;
      color: #fff;
    }
  }
`;
