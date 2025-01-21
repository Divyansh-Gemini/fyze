import React from "react";
import {AutoCompleteInputProps} from "@/types";
import {Autocomplete, AutocompleteItem} from "@heroui/react";

const AutocompleteInput: React.FC<AutoCompleteInputProps> = ({
                                                                 idAndName = "",
                                                                 type = "text",
                                                                 suggestions = [],
                                                                 label = "",
                                                                 labelPlacement = "outside",
                                                                 placeholder = "Search stock",
                                                                 variant = "bordered",
                                                                 size = "lg",
                                                                 radius = "sm",
                                                                 isRequired = false,
                                                                 value = "",
                                                                 onInputChange = () => {
                                                                 },
                                                                 onSelectionChange = () => {
                                                                 },
                                                             }) => {
    return (
        <Autocomplete
            id={idAndName}
            name={idAndName}
            type={type}
            defaultItems={suggestions}
            label={label}
            labelPlacement={labelPlacement}
            placeholder={placeholder}
            variant={variant}
            size={size}
            radius={radius}
            isRequired={isRequired}
            value={value}
            onInputChange={onInputChange}
            onSelectionChange={onSelectionChange}
        >
            {(suggestion) => <AutocompleteItem key={suggestion.key}>{suggestion.label}</AutocompleteItem>}
        </Autocomplete>
    );
};

export default AutocompleteInput;
