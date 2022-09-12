import CustomButton from "../commonComponents/button/button";
import CustomIcon from "../commonComponents/icon/icon";
import CustomLebel from "../commonComponents/lebel/lebel";
import "./aashraHeader.css";

function AashraaHeader() {
    return (
        <div className="d-flex justify-content-between container">
            <CustomIcon iconPath="C:\Users\Siddarth\Desktop\Projects\Aashra\UI\aashra-ui\src\assets\images\aashraaFoundationLogo.jpg" altPath="Aashraa" />
            <CustomLebel lebelText={"Aashraa Foundation Odisha"} />
            <div data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
                <CustomButton buttonClass="button-donate"  />
            </div>


            <div className="offcanvas-lg offcanvas-end" tabIndex={-1} id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel"><div className="offcanvas-header">
                <div className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></div>
            </div>
                <CustomButton buttonName="Involve & Donate" buttonClass="button-donate"></CustomButton>
            </div>
        </div>
    );
}

export default AashraaHeader;