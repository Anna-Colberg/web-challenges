import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";

const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const StyleLink = styled(Link) `
text-decoration: none;
&:hover {
  text-decoration: underline;
  color: #a50000ff;
}
`


export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyleLink href="/">Home</StyleLink>
          </li>
          <li>
            <StyleLink href="/about">About</StyleLink>
          </li>
          <li>
            <StyleLink href="/contact">Contact</StyleLink>
          </li>
        </StyledList>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
