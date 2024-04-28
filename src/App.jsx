import { useState } from "react";
import "./App.css";
import SingleQuestion from "./SingleQuestion";
import questions from "./data";
import data from "./data";
import Question from "./Question";

function App() {
  const [quesiotns, setQuesiotns] = useState(data);
  return (
    <>
      <main>
        <div className="container">
          <h3>quesiotns and answer about login</h3>
          <section className="info">
            {quesiotns.map((question) => {
              console.log(question);
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
