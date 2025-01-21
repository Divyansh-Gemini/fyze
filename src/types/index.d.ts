import {ChangeEventHandler} from "react";
import {Key} from "@react-types/shared";
import {CalendarDate} from "@heroui/react";
import {SharedSelection} from "@heroui/system";

interface LayoutProps {
    children: ReactNode;
}

interface RecommendationFormData {
    stockName: string;
    stockTicker: string;
    advisorName: string;
    advisorId: number;
    timePeriod: string;
    rating: string;
    entryPrice: string;
    targetPrice: string;
    stopLoss: string;
    targetDate: CalendarDate | null;
    recommendationDate: CalendarDate | null;
    reason: string;
    url: string;
    closurePrice: string;
    closedDate: CalendarDate | null;
    closureReason: string;
    isActive: boolean;
}

interface LabelProps {
    htmlFor: string;
    className?: string;
    text: string;
    isRequired?: boolean;
}

interface PageTitleProps {
    text: string;
}

interface InputProps {
    idAndName: string;
    type?: string;
    label?: string;
    labelPlacement?: "outside" | "outside-left" | "inside";
    placeholder?: string;
    prefix?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isClearable?: boolean;
    value?: string;
    isRequired?: boolean;
    errorMessage?: string;
    handleChange?: ChangeEventHandler<T>;
}

interface SelectorProps {
    items: { key: Key, label: string }[];
    label?: string;
    labelPlacement?: "outside" | "outside-left" | "inside";
    placeholder?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isRequired?: boolean;
    selectedKey: Key;
    onSelectionChange?: (keys: SharedSelection) => void;
}

interface DatePickerProps {
    idAndName: string;
    label?: string;
    labelPlacement?: "outside" | "outside-left" | "inside";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    value?: CalendarDate | null;
    isRequired?: boolean;
    errorMessage?: string;
    handleChange?: (date: CalendarDate | null) => void;
}

interface RadioChipProps {
    id: string;
    name: string;
    value?: string;
    label?: string;
    isChecked?: boolean;
    handleChange?: ChangeEventHandler<T>;
}

interface RadioInputProps {
    id: string;
    name: string;
    value?: string;
    isChecked?: boolean;
    classname?: string;
    handleChange?: ChangeEventHandler<T>;
}

interface TextAreaProps {
    idAndName: string;
    label?: string;
    labelPlacement?: "outside" | "outside-left" | "inside";
    placement?: string;
    placeholder?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isClearable?: boolean;
    value?: string;
    isRequired?: boolean;
    errorMessage?: string;
    handleChange?: ChangeEventHandler<T>;
}

interface LabelledChipProps {
    htmlFor: string;
    text: string;
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isSelected?: boolean;
}

interface AutoCompleteInputProps {
    idAndName: string;
    type?: string;
    suggestions: { key: Key, label: string }[];
    label?: string;
    labelPlacement?: "outside" | "outside-left" | "inside";
    placeholder?: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isRequired?: boolean;
    value?: string;
    onInputChange?: (value: string) => void;
    onSelectionChange?: (key: Key | null) => void;
}
