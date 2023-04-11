import React, { useState } from 'react';

function Question({ info }) {
    // const [is, setUserAnswer] = useState();
    const [message, setMessage] = useState("");
    const checkAnswer = (user_choice) => {
        // if (!userAnswer) return
        if (user_choice === info.correct_answer) {
            setMessage("Congrats! You got it correct.")
            return true;
        } else {
            setMessage("Sorry, you got it incorrect :((")
            return false;
        }

    }
    const choices = [...info.incorrect_answers, info.correct_answers];
    //choices.concat([info.correct_answers]);



    return (
        <>
            <h2>{info.question}</h2>
            {choices.map((option, index) => <button onClick={() => {
                checkAnswer(option);
            }
            }>{option}</button>)}
            <p>{message}</p>
        </>

    );
}


export default Question;