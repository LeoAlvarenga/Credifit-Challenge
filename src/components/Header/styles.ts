import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  height: 64px;
  background: #01929f;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  margin-left: 226px;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: #fff;
    transition: 0.4s;

    &:hover {
      color: ${shade(0.2, "#ffffff")};
    }
  }

  h4 {
    margin-right: 44px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 36px;

  p {
    color: #ffffff;
    margin-left: 18px;
  }
`;

export const Avatar = styled.div`
  height: 36px;
  width: 36px;
  border: 0;
  border-radius: 50%;
  background: #80c8cf;
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    color: #ffffff;
    margin: 0;
  }
`;
