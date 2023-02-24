import { createAction } from "@reduxjs/toolkit";

export const logAction = createAction<string>("logger/log")