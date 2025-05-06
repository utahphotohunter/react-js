import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "../Section";
import Tabs from "../Tabs.jsx";

export default function Examples() {
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  const [selectedTopic, setSelectedTopic] = useState();

  // initial content to be displayed under TabButton
  let tabContent = <p>Please select a topic</p>;

  // dynamic content to be displayed after a TabButton is selected
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
