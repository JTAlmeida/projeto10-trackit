import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import styled from "styled-components";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const SEC = 1000;
const MIN = SEC * 60;

export default function PrivatePage({ children }) {
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("trackit"));

  function renderError() {
    localStorage.clear("trackit");
    return (
      <>
        <Wrapper>
          <img src={logo} alt="logo"></img>
          <h1>
            Você não pode acessar esta página. <br /> Por favor faça login ou
            crie seu usuário.
          </h1>
          <button onClick={() => navigate("/")}>Faça login!</button>
          <button onClick={() => navigate("/cadastro")}>Cadastre-se.</button>
        </Wrapper>
      </>
    );
  }

  const now = +new Date();

  if (!auth) {
    return renderError();
  } else {
    const timeLogged = auth.timestamp;
    if (now - timeLogged >= 10 * MIN) {
      return renderError();
    } else {
      return (
        <>
          <Header />
          {children}
          <Footer/>
        </>
      );
    }
  }
}

const Wrapper = styled.div`
  background-color: rgba(242, 242, 242, 1);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-top: 50px;
  }

  h1 {
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }

  button {
    width: 40vw;
    min-height: 35px;
    background-color: rgba(82, 182, 255, 1);
    border-radius: 4.64px;
    color: rgba(255, 255, 255, 1);
    font-size: 26.98px;
    font-weight: 400;
    cursor: pointer;
    margin-bottom: 20px;
    text-align: center;
  }
`;
