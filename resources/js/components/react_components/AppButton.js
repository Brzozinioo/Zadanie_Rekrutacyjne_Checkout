import React from "react";
import colors from "../config/colors";

function AppButton({
    outlined,
    text,
    submit,
    color = colors.red,
    width = "100%",
    height = "60px",
    ...props
}) {
    return (
        <button
            type={submit ? "submit" : "button"}
            onClick={props.onClick}
            style={{
                width: width,
                height: height,
                border: outlined ? "3px solid " + color : "none",
                borderRadius: "5px",
                backgroundColor: outlined ? "transparent" : color,
                color: outlined ? color : "white",
                fontSize: "1.2rem",
                fontWeight: "600",
                cursor: "pointer",
            }}
        >
            {text}
        </button>
    );
}

export default AppButton;
