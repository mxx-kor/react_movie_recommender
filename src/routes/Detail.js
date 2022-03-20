import React from "react";
import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();
    if (location.state) {
        return <span>{location.state.title}</span>
    } else {
        window.location.href = "/"
        return null;
    }
}


export default Detail