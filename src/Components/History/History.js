import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

import {
  HistoryWrapper,
  ContentWrapper,
  NoHistory,
  MyHistory,
} from "./History.style";

export default function History() {
  const { user, setUser } = useContext(UserContext);
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
