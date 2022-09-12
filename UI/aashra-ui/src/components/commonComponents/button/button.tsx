import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { buttonProps } from "./buttonProps";

function CustomButton(props: buttonProps) {
    return (
        <button className={`d-flex btn btn-flat ${props.buttonClass}`} type="button" title={props.buttonName}>
            <FontAwesomeIcon icon={faHeart} beat />
            <p className="ms-2">{props.buttonName}</p>
        </button>
    );
}

export default CustomButton;