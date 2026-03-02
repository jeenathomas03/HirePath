import React, { useState } from "react";
import "./InterviewPrep.css";

const questionsData = [
  {
    category: "Frontend",
    questions: [
      {
        question: "What is React?",
        answer:
          "React is a JavaScript library used to build user interfaces, especially single-page applications using reusable components."
      },
      {
        question: "What is the Virtual DOM?",
        answer:
          "Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first and then efficiently updates the real DOM."
      }
    ]
  },
  {
    category: "Backend",
    questions: [
      {
        question: "What is Node.js?",
        answer:
          "Node.js is a runtime environment that allows JavaScript to run on the server side."
      },
      {
        question: "What is Express.js?",
        answer:
          "Express.js is a web framework for Node.js used to build APIs and web applications."
      }
    ]
  },
  {
    category: "HR Interview",
    questions: [
      {
        question: "Tell me about yourself.",
        answer:
          "I am a Full Stack Developer trained in the MERN stack with experience building projects like OTT platforms and management systems."
      },
      {
        question: "What are your strengths?",
        answer:
          "My strengths include problem-solving, learning new technologies quickly, and building scalable web applications."
      }
    ]
  }
];

function InterviewPrep() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let count = 0;

  return (
    <div className="interview-container">
      <h1>Interview Preparation</h1>

      {questionsData.map((section, i) => (
        <div key={i} className="category-section">
          <h2>{section.category}</h2>

          {section.questions.map((item, index) => {
            count++;
            return (
              <div key={index} className="question-card">
                <div
                  className="question"
                  onClick={() => toggleAnswer(count)}
                >
                  {item.question}
                </div>

                {activeIndex === count && (
                  <div className="answer">{item.answer}</div>
                )}import React, { useState } from "react";
                import "./InterviewPrep.css";
                
                const questionsData = [
                  {
                    category: "Frontend",
                    questions: [
                      {
                        question: "What is React?",
                        answer:
                          "React is a JavaScript library used to build user interfaces, especially single-page applications using reusable components."
                      },
                      {
                        question: "What is the Virtual DOM?",
                        answer:
                          "Virtual DOM is a lightweight copy of the real DOM. React updates the Virtual DOM first and then efficiently updates the real DOM."
                      }
                    ]
                  },
                  {
                    category: "Backend",
                    questions: [
                      {
                        question: "What is Node.js?",
                        answer:
                          "Node.js is a runtime environment that allows JavaScript to run on the server side."
                      },
                      {
                        question: "What is Express.js?",
                        answer:
                          "Express.js is a web framework for Node.js used to build APIs and web applications."
                      }
                    ]
                  },
                  {
                    category: "HR Interview",
                    questions: [
                      {
                        question: "Tell me about yourself.",
                        answer:
                          "I am a Full Stack Developer trained in the MERN stack with experience building projects like OTT platforms and management systems."
                      },
                      {
                        question: "What are your strengths?",
                        answer:
                          "My strengths include problem-solving, learning new technologies quickly, and building scalable web applications."
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
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default InterviewPrep;