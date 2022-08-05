import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { TodayWrapper } from "./Today.style";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function Today() {
  let weekday = dayjs().locale("pt-br").format("dddd").replaceAll("-feira", "");
  weekday = weekday.replace(/^./, weekday[0].toUpperCase());
  const date = dayjs().format("DD/MM");

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <TodayWrapper>
      <h1>
        {weekday}, {date}
      </h1>
      <h2>
        <h2>Nenhum hábito concluído ainda</h2>
      </h2>
    </TodayWrapper>
  );
}
