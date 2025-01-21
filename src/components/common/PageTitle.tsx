import React from "react";
import {PageTitleProps} from "@/types";

const PageTitle: React.FC<PageTitleProps> = ({
                                                 text = ""
                                             }) => {
    return (
        <>
            <h1 className="text-2xl font-medium text-center mb-3">
                {text}
            </h1>

            <hr className="border-2 w-20 mx-auto border-gray600 dark:border-gray-200 mb-10 rounded-full"/>
        </>
    );
};

export default PageTitle;
