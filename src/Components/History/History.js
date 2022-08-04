import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import {
  HistoryWrapper,
  ContentWrapper,
  MyHabits,
  NoHistory,
  MyHistory,
} from "./History.style";

export default function History() {
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  return (
    <>
      <HistoryWrapper>
        <ContentWrapper>
          <MyHistory>Histórico</MyHistory>
          <NoHistory>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </NoHistory>
        </ContentWrapper>
      </HistoryWrapper>
    </>
  );
}
