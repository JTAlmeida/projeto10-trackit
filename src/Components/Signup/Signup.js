import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.png";
import { Wrapper, Input, Form, Button } from "./Signup.style";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userImg, setUserImg] = useState("");

  function signUp() {
    console.log("tentou criar user");
  }

  return (
    <>
      <Wrapper>
        <img src={logo}></img>

        <Form onSubmit={signUp}>
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
          <Input
            placeholder="nome"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            placeholder="foto"
            type="text"
            required
            onChange={(e) => setUserImg(e.target.value)}
            value={userImg}
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/">Já tem uma conta? Faça login!</Link>
      </Wrapper>
    </>
  );
}
