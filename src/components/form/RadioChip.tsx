import React from "react";
import RadioInput from "@/components/form/RadioInput";
import LabelledChip from "@/components/form/LabelledChip";
import {RadioChipProps} from "@/types";

const RadioChip: React.FC<RadioChipProps> = ({
                                                 id,
                                                 name,
                                                 label = "",
                                                 value = "",
                                                 isChecked = false,
                                                 handleChange = () => {
                                                 },
                                             }) => {
    return (
        <>
            <RadioInput id={id}
                        name={name}
                        value={value}
                        isChecked={isChecked}
                        classname="hide peer"
                        handleChange={handleChange}/>

            <LabelledChip htmlFor={id} text={label} isSelected={isChecked}/>
        </>
    );
};

export default RadioChip;