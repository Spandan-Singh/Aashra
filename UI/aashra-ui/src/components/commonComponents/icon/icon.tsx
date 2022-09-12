import { iconProps } from "./iconProps";

function CustomIcon(props: iconProps) {
    return (
        <img src={props.iconPath} className="img-thumbnail" alt={props.altPath}/>
    );
}

export default CustomIcon;