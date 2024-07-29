import React from "react";
import ChildComp from "../ChildComp/ChildComp.jsx";

function ParentComp() {
    let arr = ['blue', 'green', 'red', 'yellow'];

    return (
        <div>
            <h6> Parent Comp </h6>
            <div>
                <ChildComp />

            </div>
            <div> Parent Footer</div>
        </div>
    )
};

export default ParentComp;