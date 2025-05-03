import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import jsxUiImg from "./assets/jsx-ui.png";
import configImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept 
              title="Components"
              description="The core UI building blocks."
              img={componentsImg}
            />
            <CoreConcept 
              title="JSX"
              description="Expands the use of Javascript to include allowing HTML syntax."
              img={jsxUiImg}
            />
            <CoreConcept 
              title="Props"
              description="Make components configurable."
              img={configImg}
            />
            <CoreConcept 
              title="State"
              description="React-managed data."
              img={stateImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
