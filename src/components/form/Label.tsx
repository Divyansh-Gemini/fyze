import React from "react";
import {LabelProps} from "@/types";

const Label: React.FC<LabelProps> = ({htmlFor = "", className = "", text = "", isRequired = false}) => {
    return (
        <label htmlFor={htmlFor} className={`label ${className}`}>
            {text}
            {isRequired && <span className="text-red-600"> *</span>}
        </label>
    );
};

export default Label;
