import { useContext, useState, useEffect } from "react";
import {
  getTodayHabits,
  selectTodayHabit,
  deselectTodayHabit,
} from "../../trackItService";
import TodayProgressContext from "../../contexts/TodayProgressContext";
import {
  TodayWrapper,
  TodayContent,
  HabitContainer,
  HabitWrapper,
  HabitInfo,
  HabitStatus,
} from "./Today.style";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import checkbox from "../../assets/checkbox.svg";

export default function Today() {
  let weekday = dayjs().locale("pt-br").format("dddd").replaceAll("-feira", "");
  weekday = weekday.replace(/^./, weekday[0].toUpperCase());
  const date = dayjs().format("DD/MM");
  const { todayProgress, setTodayProgress } = useContext(TodayProgressContext);
  const [todayHabits, setTodayHabits] = useState([]);
  const [reloadTodayHabits, setReloadTodayHabits] = useState(false);

  function getPercentage(todayHabits) {
    const numberHabits = todayHabits.length;
    const numberHabitsDone = todayHabits.filter((habit) => habit.done).length;
    return numberHabits
      ? 100 * (numberHabitsDone / numberHabits).toFixed(2)
      : 0;
  }

  useEffect(() => {
    const promise = getTodayHabits();
    promise
      .then((res) => {
        console.log(res);
        setTodayHabits([...res.data]);
        setTodayProgress({ todayProgress: getPercentage([...res.data]), length: res.data.length});
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  }, [reloadTodayHabits]);

  console.log(todayProgress);

  const handleCheckHabit = (habitID, isChecked) => {
    if (!isChecked) {
      const promise = selectTodayHabit(habitID);
      promise
        .then(() => {
          setReloadTodayHabits(!reloadTodayHabits);
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
    } else {
      const promise = deselectTodayHabit(habitID);
      promise
        .then(() => {
          setReloadTodayHabits(!reloadTodayHabits);
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
    }
  };

  const dailyPercentage = getPercentage(todayHabits);

  return (
    <>
      <TodayWrapper>
        <TodayContent percentCompleted={dailyPercentage}>
          <h1>
            {weekday}, {date}
          </h1>
          <h2>
            {dailyPercentage > 0
              ? `${dailyPercentage.toFixed(0)}% dos hábitos concluídos`
              : "Nenhum hábito concluído ainda"}
          </h2>
          <HabitContainer>
            {todayHabits.map((habit, index) => {
              return (
                <TodayHabit
                  key={index}
                  habitName={habit.name}
                  currentSequence={habit.currentSequence}
                  highestSequence={habit.highestSequence}
                  completed={habit.done}
                  handleCheckHabit={() =>
                    handleCheckHabit(habit.id, habit.done)
                  }
                />
              );
            })}
          </HabitContainer>
        </TodayContent>
      </TodayWrapper>
    </>
  );
}

function TodayHabit({
  habitName,
  currentSequence,
  highestSequence,
  completed,
  handleCheckHabit,
}) {
  console.log(completed);

  return (
    <HabitWrapper>
      <HabitInfo
        isComplete={completed}
        isHighest={currentSequence >= highestSequence}
      >
        <p>{habitName}</p>
        <h3>Sequência atual: <h4>{` ${currentSequence} dia(s)`}</h4></h3>
        <h3>Seu recorde: <h5>{` ${highestSequence} dia(s)`}</h5></h3>
      </HabitInfo>
      <HabitStatus completed={completed} onClick={handleCheckHabit}>
        <img src={checkbox} alt="checkbox" />
      </HabitStatus>
    </HabitWrapper>
  );
}
