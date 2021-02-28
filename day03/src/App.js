import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./Comment";

// const commentFromServer = [
//   { id: 1, name: "suwan Oh", content: "My first content!" },
//   { id: 2, name: "suwan Hoo", content: "My first content!" },
//   { id: 3, name: "suwan Lee", content: "My first content!" },
// ];

let timer;

class App extends React.Component {
  // react의 lifecycle은 mounting(출생), updating(일생), unupdating(사망)으로 나뉜다.
  // mounting을 하기 위해서 constructor를 지정해줘야한다.
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        { id: 1, name: "suwan Oh", content: "My first content!" },
        { id: 2, name: "suwan Hoo", content: "My first content!" },
        { id: 3, name: "suwan Lee", content: "My first content!" },
      ],
    };
  }

  // 출생이 끝나면 하게될 일
  // 3초 간격으로 댓글을 생성한다. state에 있는 데이터를 조작할 때, 오직 this.setState()를 통해서만 해야함을 숙지해야한다!
  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length > 0) {
        // let index = comments.length;
        comments.pop();
        // 여기서 this.setState()를 사용하지 않으면 아무일도 발생하지 않는다.
        // 이유는 state는 무조건 this.setState()를 통해서만 동작하기 때문(임의로 state에 조작을 가하면 안된다.)
        // setState()를 사용하면 react는 그때에만 재 랜더링을 한다.
        this.setState({ comments: comments }); // 이름이 동일하다면 그냥 this.state(comments)로 써도 무방하다.
      } else if (timer) {
        clearInterval(timer);
      }
    }, 3000);
  }
  render() {
    const { comments } = this.state;
    return (
      <div className="App" style={{ padding: 16, backgroundColor: "#282c34" }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {comments.map((comment, index) => {
            return (
              <Comment
                key={comment.id} // props로 데이터를 넘겨줄 때, key를 넘겨주지 않으면 console 에러가 발생한다.
                id={comment.id} // props로 데이터를 넘겨줄 때, key를 넘겨주지 않으면 console 에러가 발생한다.
                name={comment.name}
                content={comment.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
