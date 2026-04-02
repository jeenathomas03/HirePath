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
          "useEffect is used to handle side effects like API calls and DOM updates."
      },
      {
        question: "Difference between props and state?",
        answer:
          "Props are read-only and passed from parent, while state is managed inside the component."
      },
      {
        question: "What is JSX?",
        answer:
          "JSX allows writing HTML inside JavaScript."
      },
      {
        question: "What is controlled component?",
        answer:
          "A controlled component is a form element whose value is controlled by React state."
      },
      {
        question: "What is lifting state up?",
        answer:
          "Moving state to a common parent component to share data between child components."
      },
      {
        question: "What is React Router?",
        answer:
          "React Router is used for navigation between different pages in a React app."
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
          "Express.js is a backend framework used to build APIs and web applications."
      },
      {
        question: "What is REST API?",
        answer:
          "REST API is a way to communicate between client and server using HTTP methods."
      },
      {
        question: "What is Middleware?",
        answer:
          "Middleware functions run during request-response cycle in Express."
      },
      {
        question: "What is JWT?",
        answer:
          "JWT is used for authentication and secure data transfer."
      },
      {
        question: "Difference between SQL and NoSQL?",
        answer:
          "SQL uses tables and structured data, NoSQL uses flexible document-based storage."
      },
      {
        question: "What is event loop?",
        answer:
          "Event loop handles asynchronous operations in Node.js."
      },
      {
        question: "What is nodemon?",
        answer:
          "Nodemon automatically restarts the server when code changes."
      },
      {
        question: "What is CORS?",
        answer:
          "CORS allows or restricts resources from different domains."
      }
    ]
  },
  {
    category: "Database (MongoDB)",
    questions: [
      {
        question: "What is MongoDB?",
        answer:
          "MongoDB is a NoSQL database that stores data in JSON-like format."
      },
      {
        question: "What is Mongoose?",
        answer:
          "Mongoose is an ODM used to interact with MongoDB in Node.js."
      },
      {
        question: "What is a Schema?",
        answer:
          "Schema defines structure of data in MongoDB."
      },
      {
        question: "What is indexing?",
        answer:
          "Indexing improves database query performance."
      },
      {
        question: "What is aggregation?",
        answer:
          "Aggregation is used to process and analyze data in MongoDB."
      },
      {
        question: "What is populate in Mongoose?",
        answer:
          "Populate is used to replace a field with actual data from another collection."
      }
    ]
  },
  {
    category: "Projects & Practical",
    questions: [
      {
        question: "Explain your project (CineStream).",
        answer:
          "CineStream is an OTT platform where users can watch movies, manage watchlist, and admins can manage content."
      },
      {
        question: "How did you handle authentication?",
        answer:
          "Used JWT for secure login and protected routes."
      },
      {
        question: "How do you connect frontend and backend?",
        answer:
          "Using APIs with axios or fetch."
      },
      {
        question: "How do you handle errors?",
        answer:
          "Using try-catch and proper error responses."
      }
    ]
  },
  {
    category: "HR Interview",
    questions: [
      {
        question: "Tell me about yourself.",
        answer:
          "I am a Full Stack Developer skilled in MERN stack with hands-on project experience."
      },
      {
        question: "What are your strengths?",
        answer:
          "Problem solving, quick learning, and adaptability."
      },
      {
        question: "What are your weaknesses?",
        answer:
          "I focus too much on details but improving time management."
      },
      {
        question: "Why should we hire you?",
        answer:
          "I have practical experience and strong willingness to learn."
      },
      {
        question: "Where do you see yourself in 5 years?",
        answer:
          "Growing as a skilled full stack developer."
      },
      {
        question: "Are you willing to relocate?",
        answer:
          "Yes, I am open to relocation."
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