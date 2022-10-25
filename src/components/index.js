import React, { useEffect, useState } from "react";
import QuestionComponent from "./questionComponent/questionComponent";
import useFetch from "../hooks/useFetch";
import Home from "./home/home";
import "./index.css"


const SetUp = () => {
    const { data, loading, error } =  useFetch("https://opentdb.com/api.php?amount=10");
    if(data || loading){
        console.log({data  : data , loading : loading})
    }
    return(
        <>
           {data.length !== 0 ? <Home Data={data}></Home> : null}
        </>
    );
}

export default SetUp;