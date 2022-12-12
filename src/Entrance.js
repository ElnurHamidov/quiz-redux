import logo from './images/react.png';
import { GiThink } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Entrance(){

    const navigate = useNavigate();

    return(
        <div className="entrance">
            <div className="h1"> How well do you know react  <GiThink /></div>
            <div className="h3"> <AiFillCaretDown /> Click below to start <AiFillCaretDown /> </div>
            <div className="img">
                <img onClick={()=>navigate('/quiz')} src={logo} alt="React" title="Start the quiz"/>
            </div>
        </div>
    );
}