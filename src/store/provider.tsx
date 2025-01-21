"use client";

import React from "react";
import {Provider} from "react-redux";
import {store} from ".";
import {LayoutProps} from "@/types";

export function ReduxProvider({children}: LayoutProps) {
    return <Provider store={store}>{children}</Provider>;
}
