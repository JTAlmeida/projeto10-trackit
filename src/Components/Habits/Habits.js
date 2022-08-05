import { useState, useEffect } from "react";
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
} from "./Habits.style";

export default function Habits() {
  const [isLoading, setIsLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [habitsData, setHabitsData] = useState([]);

  useEffect(() => {
    const promise = getHabits();

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
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
            <>
              <HabitWrapper key={index}>
                <h1>{habit.name}</h1>
                <img src={delIcon}/>
                <Checkboxes>
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((weekday, index) => {
                    return (
                      <label key={index}>
                        {habit.days.includes(index) ? (
                          <input disabled type="checkbox" checked />
                        ) : (
                          <input disabled type="checkbox" />
                        )}
                        <span>{weekday}</span>
                      </label>
                    );
                  })}
                </Checkboxes>
              </HabitWrapper>
            </>
          ))}
        </ContentWrapper>
      </HabitsWrapper>
    </>
  );
}
