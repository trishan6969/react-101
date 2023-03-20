import Props from './Props'

const questionsArr = [
    {
        question: "What is the difference between .map() and .forEach()?",
        answer: ".map() returns a new array, .forEach() does not",
        id: 1
    },
    {
        question: "What is the purpose of destructuring?",
        answer: "To extract data from arrays or objects into individual variables",
        id: 2
    },
    {
        question: "What is the purpose of the reduce() method?",
        answer: "To reduce an array to a single value",
        id: 3
    }
]

const Questions = () => {
    return (
        <>
            <Props questionsArr={questionsArr} title="Props and Mapping Practice" />
            <Props questionsArr={questionsArr.filter((question) => { return question.id > 1 })} title="Reusing Components Using Props" />
        </>
    );
}

export default Questions;