import { RiQuestionAnswerFill } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux';

export default function Quiz(){

    const counter=useSelector(state=>state.counter);
    const dispatch = useDispatch();

    const questions = [
        {
            name: 'What is React ?',
            answers: [
                {text: 'Framework' , isCorrect: false},
                {text: 'App' , isCorrect: false},
                {text: 'Library', isCorrect: true},
                {text: 'Style sheet', isCorrect: false},
                {text: 'Program' , isCorrect: false}
            ]
        },
        {
            name: 'Which company created react?',
            answers: [
                {text: 'Google' , isCorrect: false},
                {text: 'Amazon' , isCorrect: false},
                {text: 'YouTube', isCorrect: false},
                {text: 'Facebook', isCorrect: true},
                {text: 'Yandex' , isCorrect: false}
            ]
        },
        {
            name: 'How many hooks are there in React?',
            answers: [
                {text: '10' , isCorrect: false},
                {text: '5' , isCorrect: false},
                {text: '12', isCorrect: false},
                {text: '17', isCorrect: false},
                {text: '15' , isCorrect: true}
            ]
        },
        {
            name: 'Which is a react hook ?',
            answers: [
                {text: 'useEffect' , isCorrect: true},
                {text: 'useStatic' , isCorrect: false},
                {text: 'useEffection', isCorrect: false},
                {text: 'useDiscount', isCorrect: false},
                {text: 'useCount' , isCorrect: false}
            ]
        },
        {
            name: 'how many types of components in React ?',
            answers: [
                {text: '3' , isCorrect: false},
                {text: '5' , isCorrect: false},
                {text: '2', isCorrect: true},
                {text: '4', isCorrect: false},
                {text: '1' , isCorrect: false}
            ]
        },
        {
            name: 'Not related to React ...',
            answers: [
                {text: 'Components' , isCorrect: false},
                {text: 'States' , isCorrect: false},
                {text: 'Component lifecycle', isCorrect: false},
                {text: 'Refs', isCorrect: false},
                {text: 'All related to React' , isCorrect: true}
            ]
        },
        {
            name: 'Who created React ?',
            answers: [
                {text: 'Jordan Walke' , isCorrect: true},
                {text: 'Steve Jobs' , isCorrect: false},
                {text: 'Ilon Musk', isCorrect: false},
                {text: 'Mark Zuckerberg', isCorrect: false},
                {text: 'Bill Gates' , isCorrect: false}
            ]
        },
        {
            name: 'The most popular form validation library in React ?',
            answers: [
                {text: 'Redux' , isCorrect: false},
                {text: 'Formik' , isCorrect: true},
                {text: 'JQuery', isCorrect: false},
                {text: 'Nanoid', isCorrect: false},
                {text: 'Form' , isCorrect: false}
            ]
        },
        {
            name: 'Argument [] in useEffect means :',
            answers: [
                {text: 'Our component will be rendered every time the state changes' , isCorrect: false},
                {text: 'The function will be removed' , isCorrect: false},
                {text: 'The function will be updated', isCorrect: false},
                {text: 'The function will work once when the component is loaded', isCorrect: true},
                {text: 'Nothing will happen' , isCorrect: false}
            ]
        },
        {
            name: 'Which year was react invented ?',
            answers: [
                {text: '2005' , isCorrect: false},
                {text: '2010' , isCorrect: false},
                {text: '2013', isCorrect: true},
                {text: '2015', isCorrect: false},
                {text: '2017' , isCorrect: false}
            ]
        },
    ]

    const clickHandler = (correct)=>{
        dispatch({type: 'click'});
        if(correct) dispatch({type: 'true'});
    }   

    return(
        <div className="quiz">
            <div className="quiz__item">
            <div className="progress">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: "20%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="question">{questions[counter].name}</div>
            <div className="answers">
             {questions[counter].answers.map( ( e, i ) => <button onClick={()=>clickHandler(e.isCorrect)} key={i}> <RiQuestionAnswerFill /> {e.text} </button>)}
            </div>
            </div>
        </div>
    );
}