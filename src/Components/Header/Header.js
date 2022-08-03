import imgHeader  from "../../assets/imgheader.png"
import { HeaderWrapper } from "./Header.style";

export default function Header() {
    return (
      <HeaderWrapper>
        <h1>TrackIt</h1>
        <img src={imgHeader} alt="img-header"/>
      </HeaderWrapper>
    );
  }