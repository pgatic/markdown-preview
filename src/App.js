import Logo from "./logo.png";
import "./App.css";
import React, { Component } from "react";
import marked from "marked";

marked.setOptions({
  breaks: true,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: `## Hi there, feel free to use 
# REACT markdown preview
libraries used in project:
- react
- bootstrap
- marked
>  **Wisdom begins in wonder**.
>  _Socrates_
![logo](${Logo})[github](https://github.com/pgatic/markdown-preview)
Use \`code\` in your Markdown file.
\`\`\`
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
\`\`\``,
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  getMarkdownText() {
    const rawMarkup = marked(this.state.input);
    return { __html: rawMarkup };
  }

  render() {
    return (
      <div className="App container">
        <h1>Markdown preview</h1>
        <div className="form-group row mt-5">
          <div className="col-6">
            <label htmlFor="editor">Editor</label>
            <textarea
              onChange={this.handleChange}
              value={this.state.input}
              className="form-control"
              id="editor"
              rows="25"
            ></textarea>
          </div>
          <div className="col-6">
            <label htmlFor="preview">Preview</label>
            <div
              dangerouslySetInnerHTML={this.getMarkdownText()}
              id="preview"
              className="card text-left"
              style={{ minHeight: "38rem" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
