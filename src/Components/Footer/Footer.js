import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { FooterWrapper, Button, ProgressWrapper } from "./Footer.style";
import TodayProgressContext from "../../contexts/TodayProgressContext";

export default function Footer() {
  const { todayProgress } = useContext(TodayProgressContext);

  return (
    <>
      <FooterWrapper>
        <Link to="/habitos">
          <Button>Hábitos</Button>
        </Link>
        <Link to="/hoje">
          <ProgressWrapper>
            <CircularProgressbar
              value={todayProgress.todayProgress}
              text={`Hoje`}
              background={true}
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "rgba(82, 182, 255, 1)",
                textColor: "rgba(255, 255, 255, 1)",
                pathColor: "rgba(255, 255, 255, 1)",
                trailColor: "transparent",
              })}
            />
          </ProgressWrapper>
        </Link>
        <Link to="/historico">
          <Button>Histórico</Button>
        </Link>
      </FooterWrapper>
    </>
  );
}
