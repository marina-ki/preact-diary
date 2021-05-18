import { h, Fragment } from "preact";

const Layout = ({ navColor, children }) => {
  return (
    <>
      <nav style={navStyle(navColor)}>
        <a style={navLinkStyle} href="/">
          Home
        </a>
        <a style={navLinkStyle} href="/new">
          New
        </a>
      </nav>
      <main style={mainStyle}>{children}</main>
    </>
  );
};

const navStyle = (color) => `
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    background-color: ${color};
`;

const navLinkStyle = `
    margin: 1rem;
`;

const mainStyle = `
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
`;

export default Layout;
