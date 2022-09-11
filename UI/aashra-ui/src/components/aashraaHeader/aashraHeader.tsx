import CustomButton from "../commonComponents/button/button";
import Lebel from "../commonComponents/lebel/lebel";
import "./aashraHeader.css";

function AashraaHeader() {
    return (
        <div className="d-flex justify-content-between container">
        <Lebel text={"Aashra Foundation Odisha"}/>
        <CustomButton buttonName="Involve & Donate" buttonClass="button-donate"/>
        </div>
    );
}

export default AashraaHeader;