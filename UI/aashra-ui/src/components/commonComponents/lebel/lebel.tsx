import { lebelProps } from "./lebelProps";

function CustomLebel(props: lebelProps) {
    return (
        <p>
            {props.lebelText}
        </p>
    );
}

export default CustomLebel;