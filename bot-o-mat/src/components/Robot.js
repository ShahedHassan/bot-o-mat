import React from 'react';
const Robot = (props) => {
    const { tasks, robotName, robotTypeSelector } = props;

    const convertToSeconds = (oldSec) => {
        const newSeconds = oldSec / 1000;
        //converting the milliseconds to seconds
        // if else statement is for the 'do the dishes task', cause it takes 1 second
        if (oldSec === 1000) {
            return `${newSeconds} seconds`;
        } else {
            return `${newSeconds} seconds`;
        }
    };

    // const timeoutHandler = (name, index) => {
    //     const buttonProperties = `${name}-${index}`;
    //     document.getElementById(`${buttonProperties}-button`).style.display = "none";
        
    //     !!would have made the complete button disappear after completed
    //     for future implementation, within this timeoutHandler,
    //     add setTimeout to implement auto countdown for tasks to complete!!

    // };


    return (
        <div>
            <h2>{robotName}</h2>
            <p>Bot Type: {robotTypeSelector}</p>
            <div>
                <ul>
                    {tasks.map((bot, botIndex) => {
                        const buttonInfo = `${robotName}-${botIndex}`;
                        return (
                            <li>
                                <p>{bot.description}</p>
                                <p>ETA: {convertToSeconds(bot.eta)}</p>


                                <div>
                                    <button>Complete</button>
                                    <div className="tasklistCompleted" id={`${buttonInfo}-completed`}></div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Robot;