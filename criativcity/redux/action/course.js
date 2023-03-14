import { Apiurl } from "@/constants/url";
import axios from "axios";


export const COURSES = "COURSES";

export const getAllCourse = () => {
    return dispatch => {
        axios
            .get(`${Apiurl}/course/getAllCourse`, {
            })
            .then((res) => {
                // console.log("res :", res.data.data)
                dispatch({ type: COURSES, data: res.data.data });
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: COURSES, data: [] });
            });
    }
}