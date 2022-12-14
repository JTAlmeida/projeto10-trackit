import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import logo from "../../assets/logo.png";
import { signUp } from "../../trackItService";
import { Wrapper, Input, Form, Button } from "./Signup.style";
import { ThreeDots } from "react-loader-spinner";

export default function Signup() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setUser(JSON.parse(localStorage.getItem("trackit")));
      navigate("/hoje");
    }
  }, []);

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
      .catch((res) => {
        alert(res.response.data.message);
        setIsLoading(false);
        setForm({
          email: "",
          name: "",
          image: "",
          password: "",
        });
      })
      .then(() => {
        setIsLoading(false);
        setForm({
          email: "",
          name: "",
          image: "",
          password: "",
        });
        navigate("/");
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
              <ThreeDots
                color="rgba(255, 255, 255, 1)"
                height={11}
                width={50}
              />
            </Button>
          </Form>
          <Link to="/">J?? tem uma conta? Fa??a login!</Link>
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
          <Link to="/">J?? tem uma conta? Fa??a login!</Link>
        </Wrapper>
      )}
    </>
  );
}
