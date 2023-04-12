import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../feature/StudentSlice";
export default configureStore({
    reducer:{
        student:StudentSlice
    },
})