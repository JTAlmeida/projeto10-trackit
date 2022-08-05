import styled from "styled-components";

export const TodayWrapper = styled.div`
  background-color: rgba(242, 242, 242, 1);
  margin-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: rgba(18, 107, 165, 1);
  font-size: 22.98px;
  font-weight: 400;
`;

export const TodayContent = styled.div`
  width: calc(min(100vw) - 34px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 110px;
  h1 {
    margin-top: 28px;
    width: 100%;
    font-weight: 400;
    font-size: 22.98px;
    color: #126ba5;
  }
  h2 {
    margin-bottom: 28px;
    width: 100%;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.98px;
    color: ${(props) =>
      props.percentCompleted > 0 ? "rgba(143, 197, 73, 1)" : "#BABABA"};
  }
`;

export const HabitContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`;

export const HabitWrapper = styled.div`
  width: 100%;
  min-height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
`;

export const HabitInfo = styled.div`
  h3 {
    width: 98%;
    font-weight: 400;
    font-size: 19.98px;
    color: rgba(102, 102, 102, 1);
    margin-bottom: 7px;
  }
  h4,
  h5 {
    font-weight: 400;
    font-size: 12.98px;
  }
  h4 {
    color: ${(props) =>
      props.greenCurrent ? "rgba(143, 197, 73, 1)" : "rgba(102, 102, 102, 1)"};
  }
  h5 {
    color: ${(props) =>
      props.greenHighest ? "rgba(143, 197, 73, 1)" : "rgba(102, 102, 102, 1)"};
  }
`;

export const HabitStatus = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${(props) =>
    props.completed ? "rgba(143, 197, 73, 1)" : "rgba(235, 235, 235, 1)"};
  border: 1px solid rgba(231, 231, 231, 1);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
