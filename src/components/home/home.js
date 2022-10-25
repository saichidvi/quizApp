import React, { useEffect, useState } from "react";
import QuestionComponent from "../questionComponent/questionComponent";
import "./home.css"


const Home = ({Data}) => {
    const [data,setData] = useState(Data);
    const [activeStep,setActiveStep] = useState(0);
    const [totalSteps,setTotalSteps] = useState(0);
    const [answers,setAnswers] = useState([]);
    const [marks,setMarks] = useState(0);
    useEffect(() => {
       setTotalSteps((Data.length - 1 ));
       console.log({data : Data})
    },[]);
    const incrStep = () =>{
        if(answers[activeStep]){
            setActiveStep(activeStep + 1);
        }else {
            window.alert("Please select an option.")
        }
    }
    const dcrStep = () => {
        if(answers[activeStep]){
            setActiveStep(activeStep - 1);
        }else {
            window.alert("Please select an option.")
        }
    }
    return(
        <>
           <div className="form-wrap">
                <form>
                    <>
                        {data?.length !== 0 ? <>
                                {data.map((val,index) => {
                                    return(<>
                                        {activeStep === index ? <QuestionComponent data = {val} index = {index} key ={index} setAnswers = {setAnswers} answers = {answers} activeStep = {activeStep} marks={marks} setMarks ={setMarks} totalSteps={totalSteps}></QuestionComponent> : null}
                                    </>)
                                })}
                            </> : null}
                        {activeStep === 0  ? <>
                            {answers[activeStep] ?  <button type="button" onClick={() => {incrStep()}} >Next</button> : null}
                        </>  : null}
                        {activeStep === totalSteps ? <>
                            <button type="button" onClick={() => {dcrStep()}}>Previous</button>
                        </> : null}
                        {(activeStep !== 0 && activeStep !== totalSteps) ? <>
                            <button type="button" onClick={() => {dcrStep()}}>Previous</button>
                            {answers[activeStep] ?  <button type="button" onClick={() => {incrStep()}} >Next</button> : null}
                        </> : null}
                    </>
                </form>
           </div>
        </>
    );
}

export default Home;