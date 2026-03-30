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
      },
      {
        question: "What are React Hooks?",
        answer:
          "Hooks are functions like useState and useEffect that allow functional components to use state and lifecycle features."
      },
      {
        question: "What is useEffect?",
        answer:
          "useEffect is a React Hook used to perform side effects like API calls, subscriptions, or DOM updates."
      },
      {
        question: "Difference between props and state?",
        answer:
          "Props are read-only and passed from parent to child, while state is managed within the component and can change."
      },
      {
        question: "What is JSX?",
        answer:
          "JSX is a syntax extension that allows writing HTML inside JavaScript."
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
      },
      {
        question: "What is REST API?",
        answer:
          "REST API is an architectural style for designing networked applications using HTTP methods."
      },
      {
        question: "What is Middleware?",
        answer:
          "Middleware functions are functions that execute during the request-response cycle in Express."
      },
      {
        question: "What is JWT?",
        answer:
          "JWT (JSON Web Token) is used for authentication and securely transmitting information between client and server."
      },
      {
        question: "Difference between SQL and NoSQL?",
        answer:
          "SQL databases are structured and use tables, while NoSQL databases are flexible and use documents, key-value pairs, etc."
      }
    ]
  },
  {
    category: "Database (MongoDB)",
    questions: [
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL database that stores data in JSON-like documents."
      },
      {
        question: "What is Mongoose?",
        answer:
          "Mongoose is an ODM library for MongoDB used in Node.js to define schemas and models."
      },
      {
        question: "What is a Schema?",
        answer:
          "A schema defines the structure of documents in a MongoDB collection."
      },
      {
        question: "What is indexing?",
        answer:
          "Indexing improves the speed of data retrieval operations in a database."
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
      },
      {
        question: "What are your weaknesses?",
        answer:
          "I sometimes focus too much on details, but I am improving by managing time effectively."
      },
      {
        question: "Why should we hire you?",
        answer:
          "I am a quick learner, passionate developer, and I have hands-on experience in MERN stack projects."
      },
      {
        question: "Where do you see yourself in 5 years?",
        answer:
          "I see myself as a skilled full stack developer contributing to impactful projects and growing professionally."
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