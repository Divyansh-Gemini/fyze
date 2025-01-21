import React from "react";
import {DatePickerProps} from "@/types";
import {DatePicker as HeroDatePicker} from "@heroui/date-picker";

const DatePicker: React.FC<DatePickerProps> = ({
                                                   idAndName,
                                                   label = "",
                                                   labelPlacement = "outside",
                                                   variant = "bordered",
                                                   size = "lg",
                                                   radius = "sm",
                                                   value = null,
                                                   isRequired = false,
                                                   errorMessage = "",
                                                   handleChange = () => {
                                                   },
                                               }) => {
    return (
        <HeroDatePicker id={idAndName}
                        name={idAndName}
                        showMonthAndYearPickers={true}
                        label={label}
                        labelPlacement={labelPlacement}
                        variant={variant}
                        size={size}
                        radius={radius}
                        isInvalid={!!errorMessage}
                        errorMessage={errorMessage}
                        value={value}
                        onChange={handleChange}
                        className="w-56 -mt-1"
                        isRequired={isRequired}/>
    );
};

export default DatePicker;