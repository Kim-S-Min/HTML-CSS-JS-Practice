/* 특정 사진이나 영상들은 풀스크린으로 확대, 축소할 수 있게 하는 기능이다
     */

const useFullscreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {
      if (element.current) {
        element.current.requestFullscreen();
        if (callback && typeof callback === "function") {
          callback(true);
        }
      }
    };
    const exitFull = () => {
      document.exitFullscreen();
      if (callback && typeof callback === "function") {
        callback(false);
      }
    };
    return { element, triggerFull, exitFull };
  };
  
  const App = () => {
    const onFullS = (isFull) => {
      console.log(isFull ? "We are full" : "We are small");
    };
    const { element, triggerFull, exitFull } = useFullscreen();
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <div ref={element}>
          <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
          <button onClick={exitFull}>Exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>Make fullscreen</button>
      </div>
    );
  };