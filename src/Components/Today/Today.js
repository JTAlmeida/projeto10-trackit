import { useContext, useState, useEffect } from "react";
import {
  getTodayHabits,
  selectTodayHabit,
  deselectTodayHabit,
} from "../../trackItService";
import TodayProgressContext from "../../contexts/TodayProgressContext";
import ReloadTodayContext from "../../contexts/ReloadTodayContext";
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
  const { reloadToday, setReloadToday } = useContext(ReloadTodayContext);
  const [todayHabits, setTodayHabits] = useState([]);

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
        setTodayHabits([...res.data]);
        setTodayProgress({
          todayProgress: getPercentage([...res.data]),
          length: res.data.length,
          today: res.data,
        });
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  }, [reloadToday]);

  const handleCheckHabit = (habitID, isChecked) => {
    if (!isChecked) {
      const promise = selectTodayHabit(habitID);
      promise
        .then(() => {
          setReloadToday(!reloadToday);
        })
        .catch((res) => {
          alert(res.response.data.message);
        });
    } else {
      const promise = deselectTodayHabit(habitID);
      promise
        .then(() => {
          setReloadToday(!reloadToday);
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
  return (
    <HabitWrapper>
      <HabitInfo
        isComplete={completed}
        isHighest={currentSequence >= highestSequence}
      >
        <p>{habitName}</p>
        <div>
          Sequência atual: <h4>{` ${currentSequence} dia(s)`}</h4>
        </div>
        <div>
          Seu recorde: <h5>{` ${highestSequence} dia(s)`}</h5>
        </div>
      </HabitInfo>
      <HabitStatus completed={completed} onClick={handleCheckHabit}>
        <img src={checkbox} alt="checkbox" />
      </HabitStatus>
    </HabitWrapper>
  );
}
