import { data } from "./data.js";
import { Examples } from "./data.js";
import { useState } from "react";
import Head from "./components/Hearder/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleclick(selected) {
    setSelectedTopic(selected);
    console.log(selected);
  }
  let tabContent = <p>Please click a button</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{Examples[selectedTopic].title}</h3>
        <p>{Examples[selectedTopic].des}</p>
        <pre>
          <code>{Examples[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Head />
      <section id="core-concepts">
        <ul>
          {data.map((item) => (
            <CoreConcepts key={item.title} {...item} />
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            selected={selectedTopic === "Component"}
            onSelect={() => handleclick("Component")}
          >
            Components
          </TabButton>
          <TabButton
            selected={selectedTopic === "JSX"}
            onSelect={() => handleclick("JSX")}
          >
            JSX
          </TabButton>
          <TabButton
            selected={selectedTopic === "Props"}
            onSelect={() => handleclick("Props")}
          >
            Props
          </TabButton>
          <TabButton
            selected={selectedTopic === "State"}
            onSelect={() => handleclick("State")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
