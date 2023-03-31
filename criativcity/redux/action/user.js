import { Apiurl } from "@/constants/url";
import axios from "axios";


export const USERDETAIL = "USERDETAIL";

export const getUserDetail = () => {
    return dispatch => {
        const token =  localStorage.getItem('token')
        if (token) {
            axios
                .get(`${Apiurl}/user/getUserDetail`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then((res) => {
                    // console.log("res :", res.data.data)
                    dispatch({ type: USERDETAIL, data: res.data.data });
                })
                .catch((err) => {
                    console.log(err);
                    dispatch({ type: USERDETAIL, data: null });
                });
        }
    }
}
