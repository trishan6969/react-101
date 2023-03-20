import { useState } from 'react'

const Props = (props) => {
    const { questionsArr, title } = props
    const [questions, setQuestions] = useState(questionsArr)
    return (
        <div className="home-section usestate">
            <h2 className="head">{title}</h2>
            <div className="mapping">
                {questions.map((q) => (
                    <div className="question" key={q.id}>
                        <p className="question-heading">{q.question}</p>
                        <p className="question-answer">{q.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Props;