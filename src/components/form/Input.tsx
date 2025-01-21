import React from "react";
import {Input as HeroInput} from "@heroui/input";
import {InputProps} from "@/types";

const Input: React.FC<InputProps> = ({
                                         idAndName,
                                         type = "text",
                                         label = "",
                                         labelPlacement = "outside",
                                         placeholder = "",
                                         prefix = "",
                                         variant = "bordered",
                                         size = "lg",
                                         radius = "sm",
                                         isClearable = true,
                                         value = "",
                                         isRequired = false,
                                         errorMessage = "",
                                         handleChange = () => {
                                         },
                                     }) => {
    return (
        <HeroInput
            id={idAndName}
            name={idAndName}
            type={type}
            label={label}
            labelPlacement={labelPlacement}
            placeholder={placeholder}
            variant={variant}
            size={size}
            radius={radius}
            isClearable={isClearable}
            value={value}
            isRequired={isRequired}
            errorMessage={errorMessage}
            isInvalid={!!errorMessage}
            onChange={handleChange}
            className={
                type === "number" ? "max-w-52" : ""
            }
            startContent={
                prefix && (<div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-medium">{prefix}</span>
                </div>)
            }
            onClear={() => {
                handleChange({target: {name: idAndName, value: ""}} as React.ChangeEvent<HTMLInputElement>);
            }}
        />
    );
};

export default Input;