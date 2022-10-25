import React from "react";
import "./questionComponent.css"



const QuestionComponent  = () => {
    return(
        <>
           <div className="form-wrap">
                <form>
                    <h1>Question - 1 </h1>
                    <button type="button"   style={{width : "40%"}} >Next</button>
                </form>
            </div>
        </>
    );
}


export default QuestionComponent;