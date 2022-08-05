import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { postHabits } from "../../trackItService";
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

  function sendHabit(e) {
    e.preventDefault();
    if (postDays.length === 0) {
      alert("Selecione pelo menos um dia para este hábito.");
      return;
    }
    setIsLoading(true);
    const name = postName;
    const days = postDays;
    const promise = postHabits({ name, days });

    promise.catch((res) => {
      alert(res.response.data.message);
      setIsLoading(false);
    });

    promise.then((res) => {
      setIsLoading(false);
      setClicked(!clicked);
    });
  }

  return (
    <>
      {isLoading ? (
        <HabitWrapper onSubmit={sendHabit} disabled>
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
            <button
              disabled
              onClick={() => {
                setClicked(!clicked);
              }}
            >
              Cancelar
            </button>
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
            name="name"
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
              onClick={() => {
                setClicked(!clicked);
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
