import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { FooterWrapper, Button, ProgressWrapper } from "./Footer.style";

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <Link to="/habitos">
          <Button>Hábitos</Button>
        </Link>
        <Link to="/hoje">
          <ProgressBar />
        </Link>
        <Link to="/historico">
          <Button>Histórico</Button>
        </Link>
      </FooterWrapper>
    </>
  );
}

function ProgressBar() {
  return (
    <ProgressWrapper>
      <CircularProgressbar
        value={50}
        text={`Hoje`}
        background={true}
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#52B6FF",
          textColor: "#FFFFFF",
          pathColor: "#FFFFFF",
          trailColor: "transparent",
        })}
      />
    </ProgressWrapper>
  );
}
