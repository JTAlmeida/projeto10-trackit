import { useState, useEffect, useContext } from "react";
import { getTodayHabits, getHabits, deleteHabit } from "../../trackItService";
import TodayProgressContext from "../../contexts/TodayProgressContext";
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
  const [postName, setPostName] = useState("");
  const [postDays, setPostDays] = useState([]);
  const { setTodayProgress } = useContext(TodayProgressContext);
  const { weekDayID } = useContext(WeekDayContext);
  const [checkBoxes] = useState([
    { value: "0", day: "D" },
    { value: "1", day: "S" },
    { value: "2", day: "T" },
    { value: "3", day: "Q" },
    { value: "4", day: "Q" },
    { value: "5", day: "S" },
    { value: "6", day: "S" },
  ]);
  function getPercentage(todayHabits) {
    const numberHabits = todayHabits.length;
    const numberHabitsDone = todayHabits.filter((habit) => habit.done).length;
    return numberHabits
      ? 100 * (numberHabitsDone / numberHabits).toFixed(2)
      : 0;
  }

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
        const promiseTodayHabits = getTodayHabits();
        promiseTodayHabits.then((resToday) => {
          setTodayProgress(() => getPercentage([...resToday.data]));
        });
        setHabitsData([]);
        setIsLoading(!isLoading);
        setIsLoading(false);
        alert("Hábito deletado com sucesso!");
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
                postName={postName}
                setPostName={setPostName}
                postDays={postDays}
                setPostDays={setPostDays}
                checkBoxes={checkBoxes}
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
