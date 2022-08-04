import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHabits, postHabits } from "../../trackItService";
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
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [done, setDone] = useState();
  const [currentSequence, setCurrentSequence] = useState();
  const [highestSequence, setHighestSequence] = useState();

  useEffect(() => {
    getHabits();

    getHabits().catch((res) => {
      alert(res.response.data.message);
      navigate("/");
    });

    getHabits().then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setDone(res.data.done);
      setCurrentSequence(res.data.currentSequence);
      setHighestSequence(res.data.HighestSequence);
    });
  }, []);

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
              <NoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </NoHabits>
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
