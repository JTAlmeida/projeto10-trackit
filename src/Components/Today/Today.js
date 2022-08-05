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
import Footer from "../Footer/Footer";

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
        setTodayProgress({ todayProgress: getPercentage([...res.data]) });
      })
      .catch((res) => {
        alert(res.response.data.message);
      });
  }, [reloadTodayHabits]);

  console.log(todayProgress);

  const handleMarkHabit = (habitID, isChecked) => {
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
          {todayHabits.map((habit) => {
            return (
              <TodayHabit
                habitName={habit.name}
                currentSequence={habit.currentSequence}
                highestSequence={habit.highestSequence}
                completed={habit.done}
                handleMarkHabit={() => handleMarkHabit(habit.id, habit.done)}
                key={habit.id}
              />
            );
          })}
        </HabitContainer>
      </TodayContent>
    </TodayWrapper>
    <Footer todayProgress={todayProgress}></Footer>
    </>
  );
}

function TodayHabit({
  habitName,
  currentSequence,
  highestSequence,
  completed,
  handleMarkHabit,
}) {
  return (
    <HabitWrapper>
      <HabitInfo
        greenCurrent={completed}
        greenHighest={currentSequence >= highestSequence}
      >
        <h3>{habitName}</h3>
        <h4>{`Sequência atual: ${currentSequence} dias`}</h4>
        <h5>{`Seu recorde: ${highestSequence} dias`}</h5>
      </HabitInfo>
      <HabitStatus completed={completed} onClick={handleMarkHabit}>
        <img src={checkbox} alt="checkbox" />
      </HabitStatus>
    </HabitWrapper>
  );
}
