import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signIn } from "../../trackItService";
import { Wrapper, Input, Form, Button } from "./SignIn.style";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignIn(e) {
    e.preventDefault();
    console.log("tentou logar");
  }

  return (
    <>
      <Wrapper>
        <img src={logo} alt="logo"></img>

        <Form onSubmit={sendSignIn}>
          <Input
            placeholder="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleForm}
            required
          />
          <Input
            placeholder="senha"
            name="password"
            type="password"
            value={form.password}
            onChange={handleForm}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
        <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
      </Wrapper>
    </>
  );
}
