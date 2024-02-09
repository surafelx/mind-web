import React, { useState } from 'react';

const QuizComponent = () => {
    const questions = [
        {
            question: 'What color is the sky on a clear day?',
            options: ['Red', 'Blue', 'Green', 'Yellow'],
            correctAnswer: 'Blue',
        },
        {
            question: 'How many legs does a cat have?',
            options: ['Two', 'Four', 'Six', 'Eight'],
            correctAnswer: 'Four',
        },
        {
            question: 'Which month comes after March?',
            options: ['April', 'May', 'June', 'July'],
            correctAnswer: 'April',
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionSelect = (option) => {
        if (!showCorrectAnswer) {
            setSelectedOption(option);
        }
    };

    const handleNextQuestion = () => {
        setShowCorrectAnswer(false);

        if (selectedOption === questions[currentQuestion].correctAnswer) {
            setScore(score + 1);
        }

        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(null);
            setShowCorrectAnswer(false);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setQuizCompleted(false);
        setShowCorrectAnswer(false);
    };

    return (
        <div style={{ margin: 'auto', marginTop: '20px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', }}>
            {quizCompleted ? (
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'black', marginBottom: '10px' }}>Congratulations! Quiz completed.</h2>
                    <p style={{ fontSize: '1.2rem', color: 'black' }}>Your score: {score} out of {questions.length}</p>
                    <button
                        style={{ marginTop: '15px', padding: '10px 20px', color: 'black', borderRadius: '5px', cursor: 'pointer', border: 'none', fontSize: '1rem', fontWeight: 'bold', transition: 'background-color 0.3s' }}
                        onClick={resetQuiz}
                    >
                        Retry Quiz
                    </button>
                </div>
            ) : (
                <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', color: 'black' }}>Question {currentQuestion + 1}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'black', marginBottom: '15px' }}>{questions[currentQuestion].question}</p>
                    <ul>
                        {questions[currentQuestion].options.map((option, index) => (
                            <li
                                key={index}
                                style={{
                                    marginBottom: '10px',
                                    padding: '10px',
                                    cursor: 'pointer',
                                    border: '1px solid #2980b9',
                                    borderRadius: '5px',
                                    backgroundColor: showCorrectAnswer && option === questions[currentQuestion].correctAnswer ? '#2ecc71' : selectedOption === option ? '#3498db' : 'white',
                                    color: showCorrectAnswer && option === questions[currentQuestion].correctAnswer ? 'white' : selectedOption === option ? 'white' : '#3498db',
                                    transition: 'background-color 0.3s',
                                }}
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#e74c3c',
                                color: 'white',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                border: 'none',
                                fontSize: '1rem',
                                opacity: currentQuestion === 0 ? 0.5 : 1,
                                transition: 'background-color 0.3s',
                            }}
                            onClick={handlePreviousQuestion}
                            disabled={currentQuestion === 0}
                        >
                            Previous
                        </button>
                        {selectedOption && (
                            <button
                                style={{
                                    padding: '10px 20px',
                                    backgroundColor: selectedOption ? '#3498db' : '#bdc3c7',
                                    color: 'white',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    border: 'none',
                                    fontSize: '1rem',
                                    opacity: selectedOption ? 1 : 0.5,
                                    transition: 'background-color 0.3s',
                                }}
                                disabled={!selectedOption}
                                onClick={() => {
                                    setShowCorrectAnswer(true);
                                }}
                            >
                                Show Answer
                            </button>
                        )}

                        <button
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#2ecc71',
                                color: 'white',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                border: 'none',
                                fontSize: '1rem',
                                opacity: selectedOption ? 1 : 0.5,
                                transition: 'background-color 0.3s',
                            }}
                            disabled={!selectedOption}
                            onClick={handleNextQuestion}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizComponent;
