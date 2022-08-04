import styled from "styled-components";

export const HabitWrapper = styled.form`
  margin-top: 20px;
  width: 100%;
  height: 180px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  padding: 18px;

  input {
    width: 100%;
    height: 45px;
    padding-left: 11px;
    margin-bottom: 8px;
    border: 1px solid rgba(212, 212, 212, 1);
    border-radius: 5px;
    font-weight: 400;
    font-size: 19.98px;
    color: rgba(102, 102, 102, 1);
    outline: none;
    
    &::placeholder {
      font-size: 19.98px;
      color: rgba(219, 219, 219, 1);
    }
    &:disabled {
      background-color: #f2f2f2;
      color: #afafaf;
    }
  }
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
      font-size: 19.976px;
      line-height: 25px;
      color: rgba(219, 219, 219, 1);
      transition: 0.3s;
      user-select: none;
      overflow: hidden;
    }
    input[type="checkbox"]:checked ~ span {
      background-color: #cfcfcf;
      color: #ffffff;
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
    background-color: rgba(255, 255, 255, 1);
    height: 100%;
    padding: 0 17px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
  }
  button:nth-child(2) {
    background-color: #52b6ff;
    height: 100%;
    padding: 0 17px;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: rgba(255, 255, 255, 1);
  }
`;
