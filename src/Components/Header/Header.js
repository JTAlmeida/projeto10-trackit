import { useContext } from 'react';
import UserContext from "../../contexts/UserContext";
import { HeaderWrapper } from "./Header.style";

export default function Header() {
  const { user } = useContext(UserContext);

    return (
      <HeaderWrapper>
        <h1>TrackIt</h1>
        <img src={user.image} alt="img-header"/>
      </HeaderWrapper>
    );
  }