import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { signUp } from "../../trackItService";
import { Wrapper, Input, Form, Button } from "./Signup.style";
import { Oval } from "react-loader-spinner";

export default function Signup() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  console.log(form);

  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function sendSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    const promise = signUp(form);
    promise
    .catch((res)=>{        
        alert(res.response.data.message);
        setIsLoading(false);
        setForm({
          email: "",
          name: "",
          image: "",
          password: ""
        });
      })
      .then((res)=>{
        setIsLoading(false);
        setForm({
          email: "",
          name: "",
          image: "",
          password: ""
        });
        navigate('/');
      });
  }

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <img src={logo} alt="logo"></img>

          <Form onSubmit={sendSignUp}>
            <Input
              disabled
              placeholder="email"
              name="email"
              type="email"
              required
              onChange={handleForm}
              value={form.email}
            />
            <Input
              disabled
              placeholder="senha"
              name="password"
              type="password"
              onChange={handleForm}
              required
              value={form.password}
            />
            <Input
              disabled
              placeholder="nome"
              name="name"
              type="text"
              required
              onChange={handleForm}
              value={form.name}
            />
            <Input
              disabled
              placeholder="foto"
              name="image"
              type="url"
              required
              onChange={handleForm}
              value={form.image}
            />
            <Button disabled type="submit">
              <Oval color="rgba(255, 255, 255, 1)" height={30} width={100} />
            </Button>
          </Form>
          <Link to="/">Já tem uma conta? Faça login!</Link>
        </Wrapper>
      ) : (
        <Wrapper>
          <img src={logo} alt="logo"></img>

          <Form onSubmit={sendSignUp}>
            <Input
              placeholder="email"
              name="email"
              type="email"
              required
              onChange={handleForm}
              value={form.email}
            />
            <Input
              placeholder="senha"
              name="password"
              type="password"
              onChange={handleForm}
              required
              value={form.password}
            />
            <Input
              placeholder="nome"
              name="name"
              type="text"
              required
              onChange={handleForm}
              value={form.name}
            />
            <Input
              placeholder="foto"
              name="image"
              type="url"
              required
              onChange={handleForm}
              value={form.image}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">Já tem uma conta? Faça login!</Link>
        </Wrapper>
      )}
    </>
  );
}
