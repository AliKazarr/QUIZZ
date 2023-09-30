import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [restartGame, setRestartGame] = useState(false);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const shuffledData = useMemo(() => {
    const data = [
      {
        id: 1,
        question: "Which programming language is often used for developing Android mobile apps?",
        answers: [
          {
            text: " Python",
            correct: false,
          },
          {
            text: "Java ",
            correct: true,
          },
          {
            text: "C#",
            correct: false,
          },
          {
            text: "Ruby",
            correct: false,
          },
        ],
        amount: "$ 100", // Soruyla ilgili kazanılan miktarı ekledik
      },
      {
        id: 2,
        question: "When did the website `Facebook` launch?",
        answers: [
          {
            text: "2004",
            correct: true,
          },
          {
            text: "2005",
            correct: false,
          },
          {
            text: "2006",
            correct: false,
          },
          {
            text: "2007",
            correct: false,
          },
        ],
        amount: "$ 200", 
      },
      {
        id: 3,
        question: "What does the acronym HTML stand for?",
        answers: [
          {
            text: "Hyper Text Markup Language",
            correct: true,
          },
          {
            text: "High-Level Text Machine Language",
            correct: false,
          },
          {
            text: "Hyper Transfer Markup Language",
            correct: false,
          },
          {
            text: " Home Tool Markup Language",
            correct: false,
          },
        ],
        amount: "$ 300", 
      },
      {
        id: 4,
        question: "Which company produced the first personal computer?",
        answers: [
          {
            text: "IBM",
            correct: true,
          },
          {
            text: "Microsoft",
            correct: false,
          },
          {
            text: "Samsung",
            correct: false,
          },
          {
            text: "Nvidia",
            correct: false, 
          },
        ],
        amount: "$ 500", 
      },
      {
        id: 5,
        question: "The most expensive technology company in the world?",
        answers: [
          {
            text: "IBM",
            correct: false,
          },
          {
            text: "Apple",
            correct: true,
          },
          {
            text: "Samsung",
            correct: false,
          },
          {
            text: "Amazon",
            correct: false, 
          },
        ],
        amount: "$ 1000", 
      },{
        id: 6,
        question: "Which is the most used programming language in the world?",
        answers: [
          {
            text: "Python",
            correct: false,
          },
          {
            text: "Java",
            correct: false,
          },
          {
            text: "Javascript",
            correct: true,
          },
          {
            text: "C++",
            correct: false, 
          },
        ],
        amount: "$ 2000",
      },{
        id: 7,
        question: "Which company introduced chat gpt?",
        answers: [
          {
            text: "AMD",
            correct: false,
          },
          {
            text: "Facebook",
            correct: false,
          },
          {
            text: "Microsoft",
            correct: true,
          },
          {
            text: "Open AI",
            correct: true, 
          },
        ],
        amount: "$ 4000", 
      },
      {
        id: 8,
        question: "What is the primary purpose of version control software in software development?",
        answers: [
          {
            text: "Documenting project requirements ",
            correct: false,
          },
          {
            text: "Managing project budgets",
            correct: false,
          },
          {
            text: "Tracking and managing changes to source code",
            correct: true,
          },
          {
            text: "Designing user interfaces ",
            correct: false, 
          },
        ],
        amount: "$ 8000", 
      },{
        id: 9,
        question: "Which programming language is commonly used for web development on the client-side?",
        answers: [
          {
            text: "Java",
            correct: false,
          },
          {
            text: "Python",
            correct: false,
          },
          {
            text: " Ruby",
            correct: false,
          },
          {
            text: "JavaScript ",
            correct: true, 
          },
        ],
        amount: "$ 16000", 
      },
      {
        id: 10,
        question: "What does the acronym API stand for in the context of software development?",
        answers: [
          {
            text: "Application Programming Interface",
            correct: true,
          },
          {
            text: "Advanced Programming Instruction",
            correct: false,
          },
          {
            text: " Automated Process Integration",
            correct: false,
          },
          {
            text: "Application Processing Interface ",
            correct: false, 
          },
        ],
        amount: "$ 32000", 
      },{
        id: 11,
        question: "What is the purpose of unit testing in software development?",
        answers: [
          {
            text: "To test the entire application's functionality",
            correct: false,
          },
          {
            text: "To ensure the user interface is visually appealing",
            correct: false,
          },
          {
            text: "  To verify the correctness of individual code units or functions",
            correct: true,
          },
          {
            text: "To optimize the application's performance ",
            correct: false, 
          },
        ],
        amount: "$ 64000", 
      },{
        id: 12,
        question: "Which database management system is known for its use of structured query language (SQL)?",
        answers: [
          {
            text: "MongoDB",
            correct: false,
          },
          {
            text: "PostgreSQL",
            correct: true,
          },
          {
            text: "  Redis",
            correct: false,
          },
          {
            text: "Cassandra ",
            correct: false, 
          },
        ],
        amount: "$ 125000", 
      },{
        id: 13,
        question: "What is the role of a software architect in a development project?",
        answers: [
          {
            text: "Writing code for the project",
            correct: false,
          },
          {
            text: " Managing project timelines and budgetsL",
            correct: false,
          },
          {
            text: " Designing the overall structure and system architecture",
            correct: true,
          },
          {
            text: "Testing the software for bugs ",
            correct: false, 
          },
        ],
        amount: "$ 250000", 
      },{
        id: 14,
        question: "What is the purpose of continuous integration (CI) in software development?",
        answers: [
          {
            text: "Ensuring the software meets user requirements",
            correct: false,
          },
          {
            text: "  Automating the deployment process",
            correct: false,
          },
          {
            text: "  Automatically merging code changes from multiple developers into a shared repository",
            correct: true,
          },
          {
            text: " Conducting security audits ",
            correct: false, 
          },
        ],
        amount: "$ 500000", 
      },{
        id: 15,
        question: "Which programming paradigm focuses on declaring the desired outcome or behavior and letting the computer determine how to achieve it?",
        answers: [
          {
            text: " Imperative programming",
            correct: false,
          },
          {
            text: "  Procedural programming",
            correct: false,
          },
          {
            text: " Declarative programming",
            correct: true,
          },
          {
            text: " Object-oriented programming",
            correct: false, 
          },
        ],
        amount: "$ 1000000", 
      },
    ];

    const shuffledArray = [...data];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      shuffledArray[i].answers = shuffleArray(shuffledArray[i].answers);
    }
    return shuffledArray;
  }, []);

  useEffect(() => {
    if (restartGame) {
      setQuestionNumber(1);
      setEarned("$ 0");
      setTimeOut(false);
      setRestartGame(false);
    } else if (questionNumber > 1) {
      setEarned(
        shuffledData.find((item) => item.id === questionNumber - 1).amount
      );
    }
  }, [questionNumber, shuffledData, restartGame]);


  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
        <div className="main">
            {timeOut ? (
              <>
                <h1 className="endText">You earned: {earned}</h1>
                <button className="bg bg-danger rounded " onClick={() => setRestartGame(true)}>Restart</button>
              </>
            ) 
: (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={shuffledData}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                    updateEarned={setEarned}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((item) => (
                <li
                  key={item.id}
                  className={
                    questionNumber === item.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{item.id}</span>
                  <span className="moneyListItemAmount">{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
