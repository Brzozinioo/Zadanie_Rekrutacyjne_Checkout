import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AppButton } from "../react_components";

function SuccessOrderPage(props) {
    const { state } = useLocation();
    const navigate = useNavigate();
    return (
        <div className="container-fluid">
            <div className="row w-100 justify-content-center align-items-center">
                <div className="col-3 mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Sukces</h5>
                            <p className="card-text text-center">
                                Twoje zamówienie o numerze: #{state.order.id}{" "}
                                zostało złożone
                            </p>
                            <AppButton
                                text={"Powrót do strony głównej"}
                                color="#e54444"
                                onClick={() => {
                                    navigate("/");
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SuccessOrderPage;
