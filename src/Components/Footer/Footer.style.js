import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: min(150px, calc(0.2 * 100vw));
  width: 100%;
  height: min(70px, calc(0.121 * 100vh));
  background-color: rgba(255, 255, 255, 1);
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 1);
  font-weight: 400;
  font-size: min(17.98px, calc(0.07 * 100vw));
  text-align: center;
  color: #52B6FF;
  cursor: pointer;
`;

export const ProgressWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  left: calc(50% - calc(0.5 * min(91px, calc(0.3 * 100vw))));
  width: min(91px, calc(0.3 * 100vw));
  height: min(91px, calc(0.3 * 100vh));
  font-weight: 400;
  font-size: 17.98px;
  text-align: center;
  cursor: pointer;
`;
