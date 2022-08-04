import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { TodayWrapper } from "./Today.style";

export default function Today() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return <TodayWrapper>Acessou</TodayWrapper>;
}
