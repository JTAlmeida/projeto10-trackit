import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import { signIn } from "../../trackItService";
import { Wrapper, Input, Form, Button } from "./SignIn.style";
import { ThreeDots } from "react-loader-spinner";

export default function SignIn() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setUser(JSON.parse(localStorage.getItem("trackit")));
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
      setUser(res.data);
      localStorage.setItem(
        "trackit",
        JSON.stringify({
          id: res.data.id,
          name: res.data.name,
          image: res.data.image,
          token: res.data.token,
          timestamp,
        })
      );
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
              <ThreeDots
                color="rgba(255, 255, 255, 1)"
                height={11}
                width={50}
              />
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
