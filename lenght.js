import React, { useContext } from "react";
import { nameContext } from "./App";
const Length = () => {
    const size = useContext(nameContext);
    return(
        <div>{size.length}</div>
    );
};
export default Length;