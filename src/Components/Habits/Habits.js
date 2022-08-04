import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import {
  HabitsWrapper,
  ContentWrapper,
  HabitsTop,
  Button,
  NoHabits,
  HabitWrapper,
  Checkboxes,
  ButtonsContainer,
} from "./Habits.style";

export default function Habits() {
  const { token, setToken } = useContext(TokenContext);
  const [newHabit, setNewHabit] = useState(false);
  const [habits, setHabits] = useState([]);
  const navigate = useNavigate();

  if (newHabit === true) {
    setNewHabit(false);
  }

  return (
    <>
      <HabitsWrapper>
        <ContentWrapper>
          <HabitsTop>
            Meus Hábitos
            <Button
              onClick={() => {
                console.log("clicou");
                CreateHabit();
                setNewHabit(true);
              }}
            >
              +
            </Button>
          </HabitsTop>

          {habits ? (
            <>
              <CreateHabit />
            </>
          ) : (
            <NoHabits>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </NoHabits>
          )}
        </ContentWrapper>
      </HabitsWrapper>
    </>
  );
}

function CreateHabit() {
  return (
    <HabitWrapper>
      <input type="text" placeholder="nome do hábito" />
      <Checkboxes>
        <label>
          <input type="checkbox" />
          <span>D</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>S</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>T</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Q</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>Q</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>S</span>
        </label>
        <label>
          <input type="checkbox" />
          <span>S</span>
        </label>
      </Checkboxes>
      <ButtonsContainer>
        <button>Cancelar</button>
        <button>Salvar</button>
      </ButtonsContainer>
    </HabitWrapper>
  );
}
