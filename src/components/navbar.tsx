import { useEffect } from "react";
import "./styles/navbar.css";
import GsapanimateNavbar from "./anime/navbargsapanime";
type Props={
  selectroute:string,
  setSelectroute:(route: string) => void;

}
function Navbar(props:Props) {


  useEffect(() => {
    GsapanimateNavbar();
  }, []);
  return (
    <div className="navcontainer">
      <div className="navbarcontent">
        <div>
        <a className="firsttitle">John Abhishek</a>
        </div>
        <div className="subtitlemenu">
        <a onClick={()=>props.setSelectroute("About")} className="secondtitle" style={{marginRight:10}}>About</a>
        <a onClick={()=>props.setSelectroute("Contact")} className="thirdtitle">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
