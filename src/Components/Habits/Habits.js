import { useContext } from "react";
import TokenContext from "../../contexts/TokenContext";
import {
  HabitsWrapper,
  ContentWrapper,
  MyHabits,
  Button,
  NoHabits,
} from "./Habits.style";

export default function Habits() {
  const { token, setToken } = useContext(TokenContext);
  
  return (
    <>
      <HabitsWrapper>
        <ContentWrapper>
          <MyHabits>
            Meus Hábitos
            <Button>+</Button>
          </MyHabits>
          <NoHabits>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NoHabits>
        </ContentWrapper>
      </HabitsWrapper>
    </>
  );
}
