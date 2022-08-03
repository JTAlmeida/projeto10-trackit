import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 33px;
  }

  a{
    color: rgba(82, 182, 255, 1);
    cursor: pointer;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Input = styled.input`
  height: 45px;
  width: 80%;
  margin-bottom: 6px;
  border: 1px solid rgba(212, 212, 212, 1);
  border-radius: 5px;
  padding-left: 11px;
  color: rgba(102, 102, 102, 1);
  font-size: 19.98px;
  font-weight: 400;

  &::placeholder {
    color: rgba(219, 219, 219, 1);
    font-size: 19.98px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  height: 45px;
  width: 80%;
  margin-bottom: 25px;
  background-color: rgba(82, 182, 255, 1);
  border-radius: 4.64px;
  color: rgba(255, 255, 255, 1);
  font-size: 20.98px;
  font-weight: 400;
  cursor: pointer;
`;
