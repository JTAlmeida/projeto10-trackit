import { useState, useContext } from "react";
import TodayProgressContext from "../../contexts/TodayProgressContext";
import { ThreeDots } from "react-loader-spinner";
import { getTodayHabits, postHabits } from "../../trackItService";
import {
  HabitWrapper,
  Checkboxes,
  ButtonsContainer,
} from "./CreateHabits.style";
export default function CreateHabit({
  clicked,
  setClicked,
  isLoading,
  setIsLoading,
}) {
  const { setTodayProgress } = useContext(TodayProgressContext);
  const [postName, setPostName] = useState("");
  const [postDays, setPostDays] = useState([]);
  const checkBoxes = [
    { value: 0, day: "D" },
    { value: 1, day: "S" },
    { value: 2, day: "T" },
    { value: 3, day: "Q" },
    { value: 4, day: "Q" },
    { value: 5, day: "S" },
    { value: 6, day: "S" },
  ];

  function getPercentage(todayHabits) {
    const numberHabits = todayHabits.length;
    const numberHabitsDone = todayHabits.filter((habit) => habit.done).length;
    return numberHabits
      ? 100 * (numberHabitsDone / numberHabits).toFixed(2)
      : 0;
  }

  function sendHabit(e) {
    e.preventDefault();
    if (postDays.length === 0) {
      alert("Selecione pelo menos um dia para este hábito.");
      return;
    }
    setIsLoading(true);
    const name = postName;
    const days = [...postDays];
    const promise = postHabits({ name, days });

    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
    });

    promise.then(() => {
      const promiseTodayHabits = getTodayHabits();
      promiseTodayHabits.then((resToday) => {
        setTodayProgress(() => getPercentage([...resToday.data]));
      });
      setIsLoading(false);
      setClicked(!clicked);
    });
  }
  console.log(postDays);
  console.log(postName);

  return (
    <>
      {isLoading ? (
        <HabitWrapper disabled>
          <input type="text" placeholder="nome do hábito" disabled />
          <Checkboxes>
            {["D", "S", "T", "Q", "Q", "S", "S"].map((weekday, index) => {
              return (
                <label key={index}>
                  <input type="checkbox" disabled />
                  <span>{weekday}</span>
                </label>
              );
            })}
          </Checkboxes>
          <ButtonsContainer>
            <button disabled>Cancelar</button>
            <button>
              <ThreeDots
                color="rgba(255, 255, 255, 1)"
                height={11}
                width={50}
              />
            </button>
          </ButtonsContainer>
        </HabitWrapper>
      ) : (
        <HabitWrapper onSubmit={sendHabit}>
          <input
            type="text"
            placeholder="nome do hábito"
            value={postName}
            onChange={(e) => setPostName(e.target.value)}
            required
          />
          <Checkboxes>
            {checkBoxes.map((checkBox, index) => {
              return (
                <WeekDay
                  key={index}
                  value={checkBox.value}
                  day={checkBox.day}
                  postDays={postDays}
                  setPostDays={setPostDays}
                ></WeekDay>
              );
            })}
          </Checkboxes>
          <ButtonsContainer>
            <button
              type="button"
              onClick={() => {
                setClicked(!clicked);
                setPostName(postName);
                setPostDays(postDays);
              }}
            >
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </ButtonsContainer>
        </HabitWrapper>
      )}
    </>
  );
}

function WeekDay({ value, day, postDays, setPostDays }) {
  const [hasValue, setHasValue] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        value={value}
        onChange={(e) => {
          if (!hasValue) {
            setPostDays([...postDays, e.target.value]);
            setHasValue(true);
          } else {
            let temp = [...postDays];
            let index;
            for (let i = 0; i < postDays.length; i++) {
              if (postDays[i] === e.target.value) {
                index = i;
                temp.splice(index, 1);
              }
            }
            setPostDays(temp);
            setHasValue(false);
          }
        }}
      />
      <span>{day}</span>
    </label>
  );
}
