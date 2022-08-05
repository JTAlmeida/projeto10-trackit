import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import GlobalStyle from "../css/GlobalStyle";
import PrivatePage from "./PrivatePage";
import UserContext from "../contexts/UserContext";
import TodayProgressContext from "../contexts/TodayProgressContext";
import ReloadTodayContext from "../contexts/ReloadTodayContext";
import WeekDayContext from "../contexts/WeekDayContext";
import { getTodayHabits } from "../trackItService";
import SignIn from "./SignIn/SignIn";
import Signup from "./Signup/Signup";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

export default function App() {
  const [user, setUser] = useState("");
  const [todayProgress, setTodayProgress] = useState(0);
  const [weekDayID, setWeekDayID] = useState("");
  const [reloadToday, setReloadToday] = useState(false);
  const weekday = dayjs()
    .locale("pt-br")
    .format("dddd")
    .replaceAll("-feira", "");

  if (weekDayID === "") {
    if (weekday === "domingo") {
      setWeekDayID("0");
    } else if (weekday === "segunda") {
      setWeekDayID("1");
    } else if (weekday === "terça") {
      setWeekDayID("2");
    } else if (weekday === "quarta") {
      setWeekDayID("3");
    } else if (weekday === "quinta") {
      setWeekDayID("4");
    } else if (weekday === "sexta") {
      setWeekDayID("5");
    } else if (weekday === "sábado") {
      setWeekDayID("6");
    }
  }

  function getPercentage(todayHabits) {
    const numberHabits = todayHabits.length;
    const numberHabitsDone = todayHabits.filter((habit) => habit.done).length;
    return numberHabits
      ? 100 * (numberHabitsDone / numberHabits).toFixed(2)
      : 0;
  }

  useEffect(() => {
    if (user) {
      const promise = getTodayHabits();
      promise.then((res) => {
        setTodayProgress({
          todayProgress: getPercentage([...res.data]),
          length: res.data.length,
          today: res.data,
        });
      });
    }
  }, []);

  const auth = JSON.parse(localStorage.getItem("trackit"));

  if (auth && user === "") {
    setUser(JSON.parse(localStorage.getItem("trackit")));
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <ReloadTodayContext.Provider value={{ reloadToday, setReloadToday }}>
          <WeekDayContext.Provider value={{ weekDayID, setWeekDayID }}>
            <TodayProgressContext.Provider
              value={{ todayProgress, setTodayProgress }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<SignIn />}></Route>
                  <Route path="/cadastro" element={<Signup />}></Route>

                  <Route
                    path="/habitos"
                    element={
                      <PrivatePage>
                        <Habits />
                      </PrivatePage>
                    }
                  ></Route>
                  <Route
                    path="/hoje"
                    element={
                      <PrivatePage>
                        <Today />
                      </PrivatePage>
                    }
                  ></Route>
                  <Route
                    path="/historico"
                    element={
                      <PrivatePage>
                        <History />
                      </PrivatePage>
                    }
                  ></Route>
                </Routes>
              </BrowserRouter>
            </TodayProgressContext.Provider>
          </WeekDayContext.Provider>
        </ReloadTodayContext.Provider>
      </UserContext.Provider>
    </>
  );
}
