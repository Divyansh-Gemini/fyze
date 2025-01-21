import React from "react";
import {SelectorProps} from "@/types";
import {SelectItem} from "@heroui/react";
import {Select} from "@heroui/select";

const Selector: React.FC<SelectorProps> = ({
                                               items = [],
                                               label = "",
                                               labelPlacement = "outside",
                                               placeholder = "",
                                               variant = "bordered",
                                               size = "lg",
                                               radius = "sm",
                                               isRequired = false,
                                               selectedKey,
                                               onSelectionChange = () => {
                                               },
                                           }) => {
    return (
        <Select items={items}
                label={label}
                labelPlacement={labelPlacement}
                placeholder={placeholder}
                isRequired={isRequired}
                variant={variant}
                size={size}
                radius={radius}
                className="w-52"
                selectedKeys={[selectedKey]}
                onSelectionChange={onSelectionChange}>
            {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
        </Select>
    );
};

export default Selector;
