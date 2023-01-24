import React, { useContext } from "react";
import { nameContext } from "./App";
const Numerical = () => {
    const name = useContext(nameContext);
    return(
        <div>{name}</div>
    );
};
export default Numerical;