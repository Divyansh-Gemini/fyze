import React from "react";
import {Textarea as HeroTextArea} from "@heroui/input";
import {TextAreaProps} from "@/types";

const Textarea: React.FC<TextAreaProps> = ({
                                               idAndName,
                                               label = "",
                                               labelPlacement = "outside",
                                               placeholder = "",
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
        <HeroTextArea id={idAndName}
                      name={idAndName}
                      label={label}
                      labelPlacement={labelPlacement}
                      placeholder={placeholder}
                      variant={variant}
                      size={size}
                      radius={radius}
                      errorMessage={errorMessage}
                      isInvalid={!!errorMessage}
                      isRequired={isRequired}
                      isClearable={isClearable}
                      value={value}
                      onChange={handleChange}
                      onClear={() => {
                          handleChange({target: {name: idAndName, value: ""}} as React.ChangeEvent<HTMLInputElement>);
                      }}
        />
    );
};

export default Textarea;