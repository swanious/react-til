# [React.js] lifecycle 알아보기 

### 1. 데이터를 push할 때,

- 코드는 3초마다 한번 씩 `this.setState()`를 통해 댓글 데이터를 push하는 간단한 코드이다.

```react
// App.js
componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length < commentFromServer.length) {
        let index = comments.length;
        comments.push(commentFromServer[index]);
        // 여기서 this.setState()를 사용하지 않으면 아무일도 발생하지 않는다.
        // 이유는 state는 무조건 this.setState()를 통해서만 동작하기 때문(임의로 state에 조작을 가하면 안된다.)
        // setState()를 사용하면 react는 그때에만 재 랜더링을 한다.
        this.setState({ comments: comments }); // 이름이 동일하다면 그냥 this.state(comments)로 써도 무방하다.
      } else if (timer) {
        clearInterval(timer);
      }
    }, 3000);
  }
```

- 결과
  1. 댓글1 생성(mount)
  2. 댓글1 update, 댓글2 생성(mount)
  3. 댓글1, 2 update, 댓글3 생성(mount)

![image-20210223233102531](README.assets/image-20210223233102531.png)

![image-20210223233257362](README.assets/image-20210223233257362.png)

### 2. 데이터를 pop할 때,

- 반대로 처음에 댓글 3개를 넣고, 하나씩 빼보자

```react
class App extends React.Component {
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
  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length > 0) {
        comments.pop(); // 하나씩 빼기
        this.setState({ comments: comments }); 
      } else if (timer) {
        clearInterval(timer);
      }
    }, 3000);
  }
    
  ...
```

- 결과
  1. 댓글 1, 2, 3이 mount된 상태로 시작
  2. 댓글 3이 사망, 동시에 댓글 1, 2가 update
  3. 댓글 2가 사망, 동시에 댓글 1이 update
  4. 댓글 1이 사망

![image-20210223233545120](README.assets/image-20210223233545120.png)

### 전체코드

- App.js

```react
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./Comment";

const commentFromServer = [
  { id: 1, name: "suwan Oh", content: "My first content!" },
  { id: 2, name: "suwan Hoo", content: "My first content!" },
  { id: 3, name: "suwan Lee", content: "My first content!" },
];

let timer;

class App extends React.Component {
  // react의 lifecycle은 mounting(출생), updating(일생), unupdating(사망)으로 나뉜다.
  // mounting을 하기 위해서 constructor를 지정해줘야한다.
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  // 출생이 끝나면 하게될 일
  // 3초 간격으로 댓글을 생성한다. state에 있는 데이터를 조작할 때, 오직 this.setState()를 통해서만 해야함을 숙지해야한다!
  componentDidMount() {
    let comments = this.state.comments;
    timer = setInterval(() => {
      if (comments.length < commentFromServer.length) {
        let index = comments.length;
        comments.push(commentFromServer[index]);
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
                id={comment.id} 
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

```

- Comment.js

```react
import React from "react";

...

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }
  // lifecycle을 알아보자.
  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdating() called`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmounting() called`);
  }
  render() {
    // 리팩토링: 아래에서 {this.props.name}, {this.props.content}로 사용하지 않고,여기서 분배해준다.
    const { name, content } = this.props;
    return (
      <div style={styles.root}>
        <div style={styles.imageContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="profile_image"
            style={styles.image}
          />
        </div>
        <div style={styles.commentContainer}>
          <div style={styles.nameText}>{name}</div>
          <span style={styles.contentText}>{content}</span>
        </div>
      </div>
    );
  }
}

export default Comment;

```

