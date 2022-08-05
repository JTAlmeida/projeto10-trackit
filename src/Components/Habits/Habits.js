import { useState, useEffect, useContext } from "react";
import { getHabits, deleteHabit } from "../../trackItService";
//import TodayProgressContext from "../../contexts/TodayProgressContext";
import CreateHabit from "../CreateHabits/CreateHabits";
import WeekDayContext from "../../contexts/WeekDayContext";
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
  const [reloadHabits, setReloadHabits] = useState(false);
  //const { todayProgress, setTodayProgress } = useContext(TodayProgressContext);
  const { weekDayID } = useContext(WeekDayContext);

  /*function newPercentage() {
    const newProgress =
      (todayProgress.todayProgress * todayProgress.length) /
      (todayProgress.length - 1);
    return newProgress;
  }*/

  useEffect(() => {
    const promise = getHabits();

    promise.catch((res) => {
      alert(res.response.data.message);
    });

    promise.then((res) => {
      setHabitsData(res.data);
    });
  }, [isLoading]);

  const delHabit = (habitId) => {
    let confirmation = window.confirm(
      "Tem certeza que deseja deletar este hábito? A ação não poderá ser desfeita."
    );
    if (!confirmation) {
      return;
    }
    const promise = deleteHabit(habitId);
    promise
      .then(() => {
        setHabitsData([]);
        setIsLoading(!isLoading);
        setIsLoading(false);
        alert("Hábito deletado com sucesso!");
        /*if (habitId === "asd") {
          setTodayProgress({
            todayProgress: newPercentage(),
            length: todayProgress.length - 1,
          });
        }*/
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  };

  return (
    <>
      <HabitsWrapper>
        <ContentWrapper>
          {clicked ? (
            <>
              <HabitsTop>
                Meus Hábitos
                <Button
                  onClick={() => {
                    setClicked(!clicked);
                  }}
                >
                  -
                </Button>
              </HabitsTop>
              <CreateHabit
                clicked={clicked}
                setClicked={setClicked}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                reloadHabits={reloadHabits}
                setReloadHabits={setReloadHabits}
              />
            </>
          ) : (
            <HabitsTop>
              Meus Hábitos
              <Button
                onClick={() => {
                  setClicked(!clicked);
                }}
              >
                +
              </Button>
            </HabitsTop>
          )}

          {habitsData.map((habit, index) => {
            return (
              <SingleHabit
                key={index}
                name={habit.name}
                days={habit.days}
                delHabit={() => delHabit(habit.id)}
                weekDayID={weekDayID}
              />
            );
          })}

          {habitsData.length === 0 ? (
            <NoHabits>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </NoHabits>
          ) : (
            <></>
          )}
        </ContentWrapper>
      </HabitsWrapper>
    </>
  );
}

function SingleHabit({
  name,
  days,
  delHabit,
  reloadHabits,
  setReloadHabits,
  weekDayID,
}) {
  if (reloadHabits === false) {
    setReloadHabits(!reloadHabits);
  }
  return (
    <HabitWrapper>
      <h1>{name}</h1>
      <img src={delIcon} alt="delIcon" onClick={delHabit} />
      <Checkboxes>
        {["D", "S", "T", "Q", "Q", "S", "S"].map((weekday, index) => {
          return (
            <label key={index}>
              {days.includes(index) ? (
                (() => {
                  if (index === Number(weekDayID)) {
                  }
                  return <input disabled type="checkbox" checked />;
                })(<input disabled type="checkbox" checked />)
              ) : (
                <input disabled type="checkbox" />
              )}
              <span>{weekday}</span>
            </label>
          );
        })}
      </Checkboxes>
    </HabitWrapper>
  );
}
