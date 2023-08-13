import "./styles.css";

export default function App() {
  function MouseIn(event) {
    var panel = document.querySelector("#panel");
    var name = event.target.className;
    event.target.style.setProperty("background-color", "crimson");
    if (name == "pane1") {
      panel.style.setProperty("grid-template-columns", "2fr 1fr 1fr");
    } else if (name == "pane2") {
      panel.style.setProperty("grid-template-columns", "1fr 2fr 1fr");
    } else {
      panel.style.setProperty("grid-template-columns", "1fr 1fr 2fr");
    }
  }

  function MouseOut(event) {
    var panel = document.querySelector("#panel");
    event.target.style.setProperty("background-color", "navajowhite");
    panel.style.setProperty("grid-template-columns", "1fr 1fr 1fr");
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="container">
        <div className="box1 element"></div>
        <div className="box2 element"></div>
        <div className="box3 element"></div>
        <div className="box4 element"></div>
        <div className="box5 element"></div>
      </div>
      <div className="panel" id="panel">
        <div
          className="pane1"
          onMouseEnter={MouseIn}
          onMouseLeave={MouseOut}
        ></div>
        <div
          className="pane2"
          onMouseEnter={MouseIn}
          onMouseLeave={MouseOut}
        ></div>
        <div
          className="pane3"
          onMouseEnter={MouseIn}
          onMouseLeave={MouseOut}
        ></div>
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
