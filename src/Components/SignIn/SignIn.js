import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import logo from "../../assets/logo.png";
import { signIn } from "../../trackItService";
import { Wrapper, Input, Form, Button } from "./SignIn.style";
import { Oval } from "react-loader-spinner";

export default function SignIn() {
  const navigate = useNavigate();
  const { token, setToken } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (token){
      setToken(JSON.parse(localStorage.getItem("trackit")));
      navigate("/hoje");
    }
  }, []);

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

    const promise = signIn(form);
    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
      setForm({
        email: "",
        password: "",
      });
    });

    promise.then((res) => {
      const timestamp = +new Date();
      setIsLoading(false);
      setToken(res.data.token);
      localStorage.setItem("trackit", JSON.stringify({token: res.data.token, timestamp}))
      setForm({
        email: "",
        password: "",
      });
      navigate("/hoje");
    });
  }

  return (
    <>
      {isLoading ? (
        <Wrapper>
          <img src={logo} alt="logo"></img>

          <Form onSubmit={sendSignIn}>
            <Input
              disabled
              placeholder="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleForm}
              required
            />
            <Input
              disabled
              placeholder="senha"
              name="password"
              type="password"
              value={form.password}
              onChange={handleForm}
              required
            />
            <Button disabled type="submit">
              <Oval color="rgba(255, 255, 255, 1)" height={30} width={100} />
            </Button>
          </Form>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se</Link>
        </Wrapper>
      ) : (
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
      )}
    </>
  );
}
