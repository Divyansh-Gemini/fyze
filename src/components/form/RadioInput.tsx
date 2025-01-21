import React from "react";
import {RadioInputProps} from "@/types";

const RadioInput: React.FC<RadioInputProps> = ({
                                                   id,
                                                   name,
                                                   value = "",
                                                   isChecked = false,
                                                   classname = "",
                                                   handleChange = () => {
                                                   },
                                               }) => {
    return (
        <input
            type="radio"
            id={id}
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            className={`${classname}`}/>
    );
};

export default RadioInput;
