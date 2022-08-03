import styled from "styled-components";

export const HistoryWrapper = styled.div`
  background-color: rgba(242, 242, 242, 1);
  margin-top: 70px;
  margin-bottom: 90px;
  width: 100%;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 0 17px;
  margin-top: 28px;
`;

export const MyHistory = styled.div`
  color: rgba(18, 107, 165, 1);
  font-size: 22.98px;
  font-weight: 400;
`;

export const NoHistory = styled.div`
  margin-top: 29px;
  color: rgba(102, 102, 102, 1);
  font-size: 17.98px;
  font-weight: 400;
`;
