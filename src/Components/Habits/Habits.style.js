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
  margin-bottom: 20px;
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
  text-align: left;
`;

export const Checkboxes = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  label {
    cursor: pointer;
    input[type="checkbox"] {
      display: none;
    }
    span {
      position: relative;
      display: inline-block;
      background-color: rgba(255, 255, 255, 1);
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid rgba(212, 212, 212, 1);
      border-radius: 5px;
      font-weight: 400;
      font-size: 19.98px;
      line-height: 25px;
      color: rgba(219, 219, 219, 1);
      transition: 0.3s;
      user-select: none;
      overflow: hidden;
    }

    input[type="checkbox"]:checked ~ span {
      background-color: rgba(207, 207, 207, 1);
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const HabitWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 91px;
  margin: 5px 0;
  padding: 18px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 1);

  h1 {
    width: 98%;
    padding-left: 2px;
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 19.98px;
    color: rgba(102, 102, 102, 1);
  }
  img {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 13px;
    height: 15px;
    cursor: pointer;
  }
  ${Checkboxes} {
    label {
      pointer-events: none;
    }
  }
`;