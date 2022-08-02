import React, { Component } from 'react';
import Robot from "./Robot";
import { robotTasks } from "../Info/robotInfo";

class Main extends Component {
    constructor(props) {
        super(props);
        this.test = React.createRef();
        // created a ref for dom and easy referencing
        // empty arrays for bots and tasks to be added below
        this.state = {
            robots: [],
            randomTasks: [],
        }
    }

    robotSubmitHandler = (event) => {
        const {robotName, robotTypeSelector, robotError} = this.refs;
        event.preventDefault();
        const botName = robotName.value
        const botType = robotTypeSelector.value
        // Creating form validation
        let errorMsg = robotError;
        if(botName.length === 0 && botType === 'default'){
            errorMsg.innerHTML = "Please select a robot type and enter a valid name! :)";
        }
        else if(botName.length === 0 ){
           errorMsg.innerHTML = "Please enter a valid name :)"
        }else if(botType === 'default'){
            errorMsg.innerHTML= "Please select a robot type :)"
        }
        
        else{
            errorMsg.innerHTML = "";


        let randomTasks = [];
        for (let x = 0; x < 5; x++) {
            const randomNumber = Math.floor(Math.random() * robotTasks.length);
            randomTasks.push(robotTasks[randomNumber])
        };
        // of the robot tasks, the for-loop and Math.random
        //  method picks 5 to assign your added robot
        const newBot = { botName, botType, randomTasks };
        this.setState({ robots: [...this.state.robots, newBot] });
    };
}

    render() {
        return (
            <main>
            <section>
                <h1>RV Bot-O-Mat</h1>
                <form onSubmit={this.robotSubmitHandler}>
                <label htmlFor="robotName">Bot Name:</label>
                    <input type="text" name="robotName" ref="robotName" placeholder="your robots name"/>
                    <label htmlFor="robotName">Bot Type:</label>
                    <select name="robotTypeSelector" ref="robotTypeSelector">
                        <option value="default">Select a Robot Type:</option>
                        <option value="Unipedal" >Unipedal</option>
                        <option value="Bipedal">Bipedal</option>
                        <option value="Quadrupedal">Quadrupedal</option>
                        <option value="Arachnid">Arachnid</option>
                        <option value="Radial">Radial</option>
                        <option value="Aeronautical">Aeronautical</option>
                        {/* drop down menu for robot types */}
                    </select>
                    <input type="submit" value="add bot"/>
                </form>


                <div ref="robotError"></div>
                {/*for the errors */}


                </section>


                <div className="roboContainer">
                    {this.state.robots.map((bot, index) => {
                        return (
                            <Robot
                                key={index}
                                robotName={bot.botName}
                                robotTypeSelector={bot.botType}
                                tasks={bot.randomTasks}
                            />
                        )
                    })}
                </div>
            </main>
        )
    }
}

export default Main;