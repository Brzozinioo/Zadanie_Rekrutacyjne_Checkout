import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import AppButton from "../AppButton";
import AppInput from "../AppInput";

function AppLoginModal({ isOpen }) {
    return (
        <div className="appModal p-4">
            <div className="row justify-content-center">
                <div className="col-12 text-center mb-4 loginModalHeader">
                    Zaloguj
                </div>
                <div className="col-12">
                    <AppInput type="text" placeholder="Login" />
                </div>
                <div className="col-12">
                    <AppInput type="password" placeholder="Hasło" />
                </div>
                <div className="col-9">
                    <AppButton text="Zaloguj" onClick={() => isOpen(false)} />
                </div>
            </div>
            <div className="closeButton">
                <RiCloseCircleLine
                    size={30}
                    color="#a89f8f"
                    onClick={() => isOpen(false)}
                />
            </div>
        </div>
    );
}

export default AppLoginModal;
