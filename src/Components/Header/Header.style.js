import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding: 0 18px;
  background-color: rgba(18, 107, 165, 1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  z-index: 1;

  h1 {
    font-family: "Playball", cursive;
    color: rgba(255, 255, 255, 1);
    font-size: 34px;
    font-weight: 400;
  }
`;
