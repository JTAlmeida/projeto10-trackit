import imgHeader  from "../assets/imgheader.png"

export default function Header() {
    return (
      <div className="header">
        <h1>TrackIt</h1>
        <img src={imgHeader} alt="img-header"/>
      </div>
    );
  }