import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { TodayWrapper } from "./Today.style";

export default function Today() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  return <TodayWrapper>Acessou</TodayWrapper>;
}
