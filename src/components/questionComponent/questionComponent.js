import React, { useEffect , useState } from "react";
import "./questionComponent.css"



const QuestionComponent  = ({data,index,setAnswers,answers,activeStep,marks,setMarks,totalSteps}) => {
    const [displayOptions,setDisplayOptions] = useState(false);
    console.log({activeStep : activeStep})

    useEffect(() => {
        const pushCorrect = () => {
            let randomNumber = Math.floor(Math.random() * 4);
            data.incorrect_answers = [...data.incorrect_answers,data.correct_answer];
            let temp = data.incorrect_answers[randomNumber];
            data.incorrect_answers[randomNumber] = data.incorrect_answers[3];
            data.incorrect_answers[3] = temp;
            if(data.incorrect_answers.length === 4 || data.incorrect_answers.length === 2){
                setDisplayOptions(true);
            }
        }
        if(data.incorrect_answers.length !== 4 || data.incorrect_answers.length !== 1){
            if(!answers[index] && answers[index] !== 0){
                pushCorrect();
            }
        }
    },[activeStep]);
    useEffect(() => {
        var checkboxes = document.getElementsByName('options');
        console.log({checkboxes : checkboxes})
        if(checkboxes){
            if(answers[index]){
                checkboxes[parseInt(answers[index])].checked = true;
            }
        }
    },[data])

    const setValues = () => {
        var checkboxes = document.getElementsByName('options');
            if(answers[index]){
                for (var j=0; j<checkboxes.length ; j++)  {
                    if (checkboxes[j].checked && (j !== parseInt(answers[index]))) {
                      checkboxes[j].checked = false;
                    }
                    if(checkboxes[j].checked === false && (j === parseInt(answers[index]))){
                        checkboxes[j].checked = true;
                    }
                  }
                window.alert("You Have selected the option already");
                console.log({answers : answers , ans : answers[index]});
            }else {
                var result = "";
                for (var i = 0; i < checkboxes.length; i++) {
                    if (checkboxes[i].checked) {
                        result += checkboxes[i].value;
                        if(data.correct_answer === data.incorrect_answers[parseInt(result)]){
                            setMarks(marks  + 5);
                        }else{
                            setMarks(marks - 1);
                        }
                    }
                };
                answers[index] = result;
            }
            console.log({answers : answers});
    }

    return(
        <> 
         {data ? <>
                     <h3>Category : {data.category}</h3>
                     <p>Q{index + 1}. {data.question} </p>
                     {/* {displayOptions ? <>
                        {data.incorrect_answers.map((val,index) => {
                        return( <p key={index}><input type="checkbox"  value ={index } name="options" onClick = {() => {setValues()}}  ></input>{`${index + 1}  ${val}`}</p>)
                        })}
                     </>: null} */}
                     {data.incorrect_answers.map((val,index) => {
                        return( <p key={index}><input type="checkbox"  value ={index } name="options" onClick = {() => {setValues()}}  ></input>{`${index + 1}  ${val}`}</p>)
                        })}
                     {activeStep === totalSteps ? <p>Total Marks : {marks}</p>  : null}
                </>: "Loading"}
        </>
    );
}


export default QuestionComponent;