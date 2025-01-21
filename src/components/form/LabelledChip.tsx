import React from "react";
import {LabelledChipProps} from "@/types";
import {Chip} from "@heroui/chip";

const Input: React.FC<LabelledChipProps> = ({
                                                htmlFor = "",
                                                text = "",
                                                size = "lg",
                                                radius = "lg",
                                                isSelected = false,
                                            }) => {
    return (
        <label htmlFor={htmlFor} className="cursor-pointer">
            <Chip radius={radius}
                  size={size}
                  color={isSelected ? "warning" : "default"}
                  variant={isSelected ? "solid" : "bordered"}
                  className="cursor-pointer"
            >
                {text}
            </Chip>
        </label>
    );
};

export default Input;
