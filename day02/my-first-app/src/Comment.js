import React from "react";

const styles = {
  root: {
    width: "50%",
    margin: "auto",
    marginTop: 16,
    padding: 16,
    textAlign: "left",
    backgroundColor: "white",
    borderRadius: 16,
  },
  imageContainer: {
    display: "inline-block",
    width: "50",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  commentContainer: {
    display: "inline-block",
    marginLeft: 16,
    textAlign: "left",
    verticalAlign: "top",
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "700",
  },
  contentText: {
    color: "black",
    fontSize: 16,
  },
};

class Comment extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
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
