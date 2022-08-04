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

export const HabitsTop = styled.div`
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
  cursor: pointer;
`;

export const NoHabits = styled.div`
  margin-top: 29px;
  color: rgba(102, 102, 102, 1);
  font-size: 17.98px;
  font-weight: 400;
`;

export const HabitWrapper = styled.div`
min-height: 180px;
width: 90%;
background-color: rgba(255, 255, 255, 1);
`;

export const Checkboxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  label {
    cursor: pointer;
    input[type=checkbox]{
      display: none;
    }
    span {
      position: relative;
      display: inline-block;
      background-color: #FFFFFF;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #DBDBDB;
      transition: 0.5s;
      user-select: none;
      overflow: hidden;
    }
    input[type=checkbox]:checked ~ span {
      background-color: #CFCFCF;
      color: #FFFFFF;
    }
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 29px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  button {
    cursor: pointer;
  }
  button:nth-child(1) {
    background-color: #FFFFFF;
    height: 100%;
    padding: 0 17px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
  }
  button:nth-child(2) {
    background-color: #52B6FF;
    height: 100%;
    padding: 0 17px;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
`;