import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import App from '../App'

describe("Hero Component Title", () => {
    test("deve conter o texto 'Blog Btix'", () => {
        render(<App /> );

        const Hero = screen.getByRole('heading', {
            name: /blog btix/i
          })
        expect(Hero).toBeInTheDocument();
    });
})

describe("Hero Component Link", () => {
    test("deve conter o link 'posts'", () => {
        render(<App /> );

        const HeroLink = screen.getByRole('link', {
            name: /posts/i
          })
        expect(HeroLink).toBeInTheDocument();
    });
})

describe("Hero Component image", () => {
    test("deve conter a a imagem com o logo da empresa'", () => {
        render(<App /> );

        const HeroImage = screen.getByRole('img', {
            name: /logo da empresa btix/i
          })
        expect(HeroImage).toBeInTheDocument();
    });
})

describe("Hero Component Header Image", () => {
    test("deve conter a imagem do header'", () => {
        render(<App /> );

        const HeroImageBanner = screen.getByRole('banner')
        expect(HeroImageBanner).toBeInTheDocument();

        
    });
})

describe("Hero Component Button Forward", () => {
    test("deve conter o botão de ir para a proxima pagina'", () => {
        render(<App /> );

        const HeroButtonForward = screen.getByRole('button', {
            name: /próxima página/i
          })
        expect(HeroButtonForward).toBeInTheDocument();
    });
})

describe("Hero Component Button back", () => {
    test("deve conter o botão de ir para a  pagina anterior", () => {
        render(<App /> );

        const HeroButtonBack = screen.getByRole('button', {
            name: /página anterior/i
          })
        expect(HeroButtonBack).toBeInTheDocument();
    });
})

