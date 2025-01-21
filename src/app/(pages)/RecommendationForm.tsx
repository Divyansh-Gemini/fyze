"use client";

import React, {useState} from "react";
import Label from "@/components/form/Label";
import Input from "@/components/form/Input";
import toast from "react-hot-toast";
import {validateCreateRecommendationForm} from "@/utils/Validators";
import {getStocks} from "@/services/stockService";
import {getAdvisors} from "@/services/advisorService";
import {createRecommendation} from "@/services/recommendationService";
import {Form} from "@heroui/form";
import {Key} from "@react-types/shared";
import Textarea from "@/components/form/Textarea";
import {Button} from "@heroui/button";
import AutocompleteInput from "@/components/form/AutoCompleteInput";
import DatePicker from "@/components/form/DatePicker";
import RadioChip from "@/components/form/RadioChip";
import {CalendarDate} from "@heroui/react";
import {RecommendationFormData} from "@/types";
import {getFinalRecommendationData} from "@/utils/Formatters";
import {Checkbox} from "@heroui/checkbox";
import {CLOSURE_REASONS} from "@/utils/Constants";
import Selector from "@/components/form/Selector";

const RecommendationForm: React.FC = () => {
    const initialFormData: RecommendationFormData = {
        stockName: "",
        stockTicker: "",
        advisorName: "",
        advisorId: 0,
        timePeriod: "",
        rating: "",
        entryPrice: "",
        targetPrice: "",
        stopLoss: "",
        targetDate: null,
        recommendationDate: null,
        reason: "",
        url: "",
        closurePrice: "",
        closedDate: null,
        closureReason: "",
        isActive: false,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [filteredStocks, setFilteredStocks] = useState<{ key: string, label: string }[]>([]);
    const [filteredAdvisors, setFilteredAdvisors] = useState<{ key: string, label: string }[]>([]);
    const [isSubmitLoading, setSubmitLoading] = useState(false);

    const handleInputChange = (name: string, value: string | number | CalendarDate | null) => {
        setFormData(prevState => ({...prevState, [name]: value}));
    };

    const handleStockChange = async (value: string) => {
        handleInputChange("stockName", value);
        if (value.length >= 2) {
            try {
                const stocks = await getStocks(value);
                setFilteredStocks(stocks.map(stock => ({key: stock.ticker, label: stock.shortName})));
            } catch (error) {
                console.error("Error fetching stock suggestions:", error);
            }
        }
    };

    const handleAdvisorChange = async (value: string) => {
        handleInputChange("advisorName", value);
        if (value.length >= 2) {
            try {
                const advisors = await getAdvisors(value);
                setFilteredAdvisors(advisors.map(advisor => ({key: advisor.id.toString(), label: advisor.name})));
            } catch (error) {
                console.error("Error fetching advisor suggestions:", error);
            }
        }
    };

    const handleSelectionChange = (id: Key | null, field: string) => {
        handleInputChange(field, id?.toString() || "");
    };

    // Handle form field changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        handleInputChange(name, value);
    };

    const handleDateChange = (date: CalendarDate | null, key: string) => {
        console.log(`handleDateChange:`, date)
        handleInputChange(key, date);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log(`handleSubmit`)
        // Prevent default form submission
        event.preventDefault();

        setSubmitLoading(true);

        // Validate form & submit
        if (validateCreateRecommendationForm(formData)) {
            await submitForm();
        } else {
            setSubmitLoading(false);
        }
    };

    const handleClear = () => {
        setFormData(initialFormData);
    }

    const submitForm = async () => {
        console.log(`submitForm:`, formData);

        const finalData = getFinalRecommendationData(formData)

        try {
            await createRecommendation(finalData);
            toast.success("Submitted successfully!");
            setFormData(initialFormData);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong!");
        } finally {
            setSubmitLoading(false);
        }
    }

    return (
        <Form className="form" onSubmit={handleSubmit} onReset={handleClear} validationBehavior="native">
            {/* Stock name & Advisor name */}
            <div className="form-field-grp">
                <AutocompleteInput idAndName="stockName"
                                   suggestions={filteredStocks}
                                   label="Stock Name"
                                   placeholder="Search stock"
                                   isRequired={true}
                                   value={formData.stockName}
                                   onInputChange={handleStockChange}
                                   onSelectionChange={
                                       (key) => handleSelectionChange(key, "stockTicker")
                                   }/>

                {/* Advisor name */}
                <AutocompleteInput idAndName="advisorName"
                                   suggestions={filteredAdvisors}
                                   label="Advisor Name"
                                   placeholder="Search advisor"
                                   isRequired={true}
                                   value={formData.advisorName}
                                   onInputChange={handleAdvisorChange}
                                   onSelectionChange={
                                       (key) => handleSelectionChange(key, "advisorId")
                                   }/>
            </div>

            {/* Time period */}
            <div className="form-field">
                <Label htmlFor="timePeriod" text="Time Period" isRequired={true}/>
                <div className="radio-chip-grp">
                    {/* Short */}
                    <RadioChip id="short"
                               name="timePeriod"
                               label="Short"
                               value="SHORT"
                               isChecked={formData.timePeriod === "SHORT"}
                               handleChange={handleChange}/>

                    {/* Medium */}
                    <RadioChip id="medium"
                               name="timePeriod"
                               label="Medium"
                               value="MEDIUM"
                               isChecked={formData.timePeriod === "MEDIUM"}
                               handleChange={handleChange}/>

                    {/* Long */}
                    <RadioChip id="long"
                               name="timePeriod"
                               label="Long"
                               value="LONG"
                               isChecked={formData.timePeriod === "LONG"}
                               handleChange={handleChange}/>

                    {/* Open-ended */}
                    <RadioChip id="open-ended"
                               name="timePeriod"
                               label="Open ended"
                               value="OPEN_ENDED"
                               isChecked={formData.timePeriod === "OPEN_ENDED"}
                               handleChange={handleChange}/>
                </div>
            </div>

            {/* Rating */}
            <div className="form-field">
                <Label htmlFor="rating" text="Rating"/>
                <div className="radio-chip-grp">
                    {/* Buy */}
                    <RadioChip id="buy"
                               name="rating"
                               label="Buy"
                               value="BUY"
                               isChecked={formData.rating === "BUY"}
                               handleChange={handleChange}/>

                    {/* Sell */}
                    <RadioChip id="sell"
                               name="rating"
                               label="Sell"
                               value="SELL"
                               isChecked={formData.rating === "SELL"}
                               handleChange={handleChange}/>

                </div>
            </div>

            {/* Entry price, Target price, & Stop loss */}
            <div className="form-field-grp">
                {/* Entry price */}
                <Input idAndName="entryPrice"
                       type="number"
                       label="Entry Price"
                       placeholder="120.00"
                       prefix="₹"
                       isClearable={true}
                       value={formData.entryPrice}
                       isRequired={formData.rating === "BUY"}
                       errorMessage=""
                       handleChange={handleChange}/>

                {/* Target price */}
                <Input idAndName="targetPrice"
                       type="number"
                       label="Target Price"
                       placeholder="150.00"
                       prefix="₹"
                       isClearable={true}
                       value={formData.targetPrice}
                       isRequired={false}
                       errorMessage=""
                       handleChange={handleChange}
                />

                {/* Stop loss */}
                <Input idAndName="stopLoss"
                       type="number"
                       label="Stop Loss"
                       placeholder="90.00"
                       prefix="₹"
                       isClearable={true}
                       value={formData.stopLoss}
                       isRequired={false}
                       errorMessage=""
                       handleChange={handleChange}
                />
            </div>

            {/* Target date & Recommendation date */}
            <div className="form-field-grp">
                {/* Target date */}
                <DatePicker idAndName="targetDate"
                            label="Target Date"
                            value={formData.targetDate}
                            isRequired={formData.rating === "BUY"}
                            errorMessage=""
                            handleChange={(date) => {
                                handleDateChange(date, "targetDate")
                            }}/>

                {/* Recommendation date */}
                <DatePicker idAndName="recommendationDate"
                            label="Recommendation Date"
                            value={formData.recommendationDate}
                            isRequired={formData.rating === "BUY"}
                            errorMessage=""
                            handleChange={(date) => {
                                handleDateChange(date, "recommendationDate")
                            }}/>
            </div>

            {/* Reason */}
            <Textarea idAndName="reason"
                      label="Reason"
                      placeholder="Enter reason"
                      isClearable={true}
                      value={formData.reason}
                      isRequired={false}
                      errorMessage=""
                      handleChange={handleChange}/>

            {/* URL */}
            <Input idAndName="url"
                   label="URL"
                   placeholder="www.example.com"
                   prefix="https://"
                   isClearable={true}
                   value={formData.url}
                   isRequired={formData.rating === "BUY"}
                   errorMessage=""
                   handleChange={handleChange}/>

            {/* Closure price, Closed date, & Closure reason */}
            <div className="form-field-grp">
                {/* Closure price */}
                <Input idAndName="closurePrice"
                       type="number"
                       label="Closure Price"
                       placeholder="Enter closure price"
                       prefix="₹"
                       isClearable={true}
                       value={formData.closurePrice}
                       isRequired={false}
                       errorMessage=""
                       handleChange={handleChange}/>

                {/* Closed date */}
                <DatePicker idAndName="closedDate"
                            label="Closed Date"
                            value={formData.closedDate}
                            isRequired={false}
                            errorMessage=""
                            handleChange={(date) => {
                                handleDateChange(date, "closedDate")
                            }}/>

                {/* Closure reason */}
                <Selector items={CLOSURE_REASONS}
                          selectedKey={formData.closureReason}
                          label="Closure Reason"
                          placeholder="Select reason"
                          isRequired={false}
                          onSelectionChange={(key) => {
                              setFormData(prevState => ({
                                  ...prevState,
                                  ["closureReason"]: key.currentKey?.toString() ?? ""
                              }));
                          }}/>
            </div>

            {/* isActive */}
            <Checkbox size="lg"
                      radius="sm"
                      color="warning"
                      isSelected={formData.isActive}
                      onValueChange={(value) => {
                          setFormData(prevState => ({...prevState, ["isActive"]: value}));
                      }}>
                Is active?
            </Checkbox>

            {/* Submit */}
            <div className="flex space-x-10 w-full">
                {/* Reset */}
                <Button type="reset"
                        color="warning"
                        variant="bordered"
                        size="lg"
                        className="w-full">
                    Reset
                </Button>

                {/* Submit */}
                <Button type="submit"
                        color="warning"
                        variant="solid"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitLoading}>
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default RecommendationForm;
