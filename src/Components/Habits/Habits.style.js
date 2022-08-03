import styled from "styled-components";

export const HabitsWrapper = styled.div`
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

export const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(18, 107, 165, 1);
  font-size: 22.98px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 40px;
  height: 35px;
  background-color: rgba(82, 182, 255, 1);
  border-radius: 4.64px;
  color: rgba(255, 255, 255, 1);
  font-size: 26.98px;
  font-weight: 400;
  border: none;
`;

export const NoHabits = styled.div`
  margin-top: 29px;
  color: rgba(102, 102, 102, 1);
  font-size: 17.98px;
  font-weight: 400;
`;
