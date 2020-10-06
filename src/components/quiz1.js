import React, { Component } from 'react';
import '../style.css';
import quizService from './quizService';
import QuestionBox from './QuestionBox';
import Result from './Result';
 class Quiz1 extends Component {
     state={
         questionBank:[],
         score:0,
         responses:0
     }
     getQuestion=()=>{
         quizService().then(question=>{
             this.setState({
                 questionBank:question
             })
         })
     }
     computeAnswer=(answer,correctAnswer)=>{
         if(answer===correctAnswer){
           this.setState({score:this.state.score + 1})
         }
         this.setState({responses:this.state.responses<10 ? this.state.responses + 1 :10})

     }
     playAgain=()=>{
         this.getQuestion();
         this.setState({
             score:0,
             responses:0
         })
     }
     componentDidMount=()=>{
         this.getQuestion()
     }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="title w3-center">Test your IQ</div>
        {this.state.questionBank.length>0 && this.state.responses<10 && this.state.questionBank.map(({question,answers,correct,questionId})=>(
            <QuestionBox question={question} options={answers} key={questionId} selected={answer=>this.computeAnswer(answer,correct)}/>
        )
            )}
              {this.state.responses===10 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}
         
                </div>
                
            </div>
        )
    }
}
export default Quiz1
