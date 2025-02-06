import React from "react";
import { useNavigate } from "react-router-dom";

let nav = useNavigate();

const navigate = (str) => {
    nav(str);
}