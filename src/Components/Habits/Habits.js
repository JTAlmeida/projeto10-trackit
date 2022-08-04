import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getHabits } from "../../trackItService";
import CreateHabit from "../CreateHabits/CreateHabits";
import delIcon from "../../assets/delete-icon.png";
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
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [habitsData, setHabitsData] = useState([]);

  useEffect(() => {
    const promise = getHabits();

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
      console.log(res);
      setHabitsData(res.data);
    });
  }, [isLoading]);

  console.log(habitsData);
  return (
    <>
      <HabitsWrapper>
        <ContentWrapper>
          <HabitsTop>
            Meus Hábitos
            {clicked ? (
              <Button
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                -
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                +
              </Button>
            )}
          </HabitsTop>

          {clicked ? (
            <>
              <CreateHabit
                clicked={clicked}
                setClicked={setClicked}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
              {() => {
                if (habitsData === []) {
                  <NoHabits>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                  </NoHabits>;
                } else {
                }
              }}
            </>
          ) : (
            <>
              {() => {
                if (habitsData === []) {
                  <NoHabits>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um
                    hábito para começar a trackear!
                  </NoHabits>;
                }
              }}
            </>
          )}
          {habitsData.map((habit, index) => (
            <HabitWrapper key={index}>
              <h1>{habit.name}</h1>
              <img src={delIcon} width="14" height="16" />
            </HabitWrapper>
          ))}
        </ContentWrapper>
      </HabitsWrapper>
    </>
  );
}
