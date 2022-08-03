import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import { Wrapper, Input, Form, Button } from "./Login.style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    console.log("tentou logar");
  }

  return (
    <>
      <Wrapper>
        <img src={logo}></img>

        <Form onSubmit={login}>
          <Input
            placeholder="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            placeholder="senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            value={password}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/cadastro">
        Não tem uma conta? Cadastre-se
        </Link>
      </Wrapper>
    </>
  );
}
