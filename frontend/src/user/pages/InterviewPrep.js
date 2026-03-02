import React, { useState } from "react";
import "./InterviewPrep.css";

const questionsData = [
  {
    category: "Frontend",
    questions: [
      {
        question: "What is React?",
        answer:
          "React is a JavaScript library used to build user interfaces using reusable components."
      },
      {
        question: "What is the Virtual DOM?",
        answer:
          "Virtual DOM is a lightweight copy of the real DOM used by React to improve performance."
      }
    ]
  },
  {
    category: "Backend",
    questions: [
      {
        question: "What is Node.js?",
        answer:
          "Node.js is a runtime environment that allows JavaScript to run on the server."
      },
      {
        question: "What is Express.js?",
        answer:
          "Express.js is a framework for Node.js used to build APIs and web applications."
      }
    ]
  },
  {
    category: "HR Interview",
    questions: [
      {
        question: "Tell me about yourself.",
        answer:
          "I am a Full Stack Developer with MERN stack knowledge and experience building web applications."
      },
      {
        question: "What are your strengths?",
        answer:
          "My strengths include problem solving, quick learning, and building scalable applications."
      }
    ]
  }
];

function InterviewPrep() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <div className="interview-container">
      <h1>Interview Preparation</h1>

      {questionsData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="category-section">
          <h2>{section.category}</h2>

          {section.questions.map((item, questionIndex) => {
            const id = `${sectionIndex}-${questionIndex}`;

            return (
              <div key={id} className="question-card">
                <div
                  className="question"
                  onClick={() => toggleAnswer(id)}
                >
                  {item.question}
                </div>

                {activeIndex === id && (
                  <div className="answer">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default InterviewPrep;