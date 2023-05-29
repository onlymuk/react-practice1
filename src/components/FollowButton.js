import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 에러가 발생하면 상태를 업데이트하여 에러를 보여줍니다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러를 기록하거나 로깅할 수 있는 추가 작업을 수행합니다.
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 에러가 발생했을 때 보여줄 대체 UI를 반환합니다.
      return <div>에러가 발생했습니다.</div>;
    }

    // 에러가 없을 경우 자식 컴포넌트를 렌더링합니다.
    return this.props.children;
  }
}

function FollowButton() {
  const [following, setFollowing] = React.useState(false);

  const commonBtnStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    right: "16px",
    width: "100px",
    height: "36px",
    borderRadius: "9999px",
    fontWeight: "bold",
  };

  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "blue",
    border: "1px solid #fff",
  };
  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: "black",
    color: "red",
  };

  return (
    <div
      onClick={() => setFollowing(!following)}
      style={following ? followingBtnStyle : followBtnStyle}
    >
      {following ? "following" : "Follow"}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <FollowButton />
    </ErrorBoundary>
  );
}
