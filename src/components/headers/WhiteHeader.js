import React, { useState } from "react";
import styled from "styled-components";
// import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import sidebarData from "../../array/sidebarData";
import sidebarDataOnSmallScreen from "../../array/sidebarDataOnSmallScreen";
import { Link } from "react-router-dom";
// import "./styles.css";

export default function HeaderModel3() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <Link to="/">
        <img
          src="/images/teslaWhiteLogo.png"
          alt=""
          style={{ cursor: "pointer" }}
        />
      </Link>
      <Menu>
        <Link style={{ color: "white" }} to="/models">
          Model S
        </Link>
        <Link style={{ color: "white" }} to="/model3">
          Model 3
        </Link>
        <Link style={{ color: "white" }} to="/modelx">
          Model X
        </Link>
        <Link style={{ color: "white" }} to="/modely">
          Model Y
        </Link>
        <Link style={{ color: "white" }} to="/solarroof">
          Solar Roof
        </Link>
        <Link style={{ color: "white" }} to="/solarpanels">
          Solar Panels
        </Link>
      </Menu>
      <RightMenu>
        <a href="#" style={{ color: "white" }}>
          Shop
        </a>
        <a href="#" style={{ color: "white" }}>
          Account
        </a>
        {/* <CustomMenu onClick={() => setBurgerStatus(true)} /> */}
        <div
          className="menu"
          onClick={() => setBurgerStatus(true)}
          style={{ color: "white" }}
        >
          Menu
        </div>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {sidebarData.map((item, index) => {
          return (
            <li key={index} onClick={() => setBurgerStatus(false)}>
              <a href={item.href}>{item.title}</a>
            </li>
          );
        })}
      </BurgerNav>

      {/* *** This Navbar will be showing on small screen*** */}
      <BurgerNavOnSmallScreen show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        {sidebarDataOnSmallScreen.map((item, index) => {
          return (
            <li key={index} onClick={() => setBurgerStatus(false)}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </BurgerNavOnSmallScreen>
    </Container>
  );
}

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  overflow-y: scroll;

  img {
    width: 200px;
  }

  a,
  .menu {
    padding: 0.5rem 0.6rem;
    font-weight: 540;
    flex-wrap: nowrap;
    /* color: white; */

    &:hover {
      /* transition: all 0.5s ease-in-out; */
      padding: 0.5rem 0.6rem;
      cursor: pointer;
      background-color: rgba(128, 128, 128, 0.8);
      border-radius: 10px;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    @media (max-width: 1024px) {
      margin-right: 1.5rem;
      display: none;
    }
  }

  @media (max-width: 1024px) {
    .menu {
      padding: 0.5rem 0.6rem;
      background-color: rgba(128, 128, 128, 0.2);
      border-radius: 10px;
    }
  }
`;

// const CustomMenu = styled(MenuIcon)`
//   cursor: pointer;
// `;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 10px 0;
    font-size: 1rem;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */

    a {
      font-weight: 500;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const BurgerNavOnSmallScreen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 250px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  display: none;
  overflow-y: scroll;

  a,
  .menu {
    padding: 0.5rem 0.6rem;
    font-weight: 540;
    flex-wrap: nowrap;
    /* color: white; */

    &:hover {
      /* transition: all 0.5s ease-in-out; */
      padding: 0.5rem 0.6rem;
      cursor: pointer;
      background-color: rgba(128, 128, 128, 0.2);
      border-radius: 10px;
    }
  }

  li {
    padding: 10px 0;
    font-size: 0.9rem;

    /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */

    a {
      font-weight: 500;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;
