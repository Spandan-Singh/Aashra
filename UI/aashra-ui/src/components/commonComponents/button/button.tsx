import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { buttonProps } from "./buttonProps";

function CustomButton(props: buttonProps) {
    return (
        <button className={`btn btn-flat ${props.buttonClass}`} type="button">
            <FontAwesomeIcon icon={faHeart} beat />
            <p className="">{props.buttonName}</p>
        </button>
    );
}

export default CustomButton;