  // component에 대해서 자세히 공부를 해야하는 이유

/* useEffect는 componentWillUnmount일 때 발생하게 된다 
  useEffect안에 function을 넣으면 
  componentDidMount, componentDidUpdate일 때 호출이 된다

  *단- dependency가 존재하지않을때만
  *만약 dependency가 존재한다면 useEffect안의 function은 
    componentDidMount일 때만 호출이 된다
    
  *useEffect function안에서 return을 사용한다면 
  componentWillUnMount로 호출이 된다.*/

  const useClick = (onClick) => {
    // if (typeof onClick !== "function") {
    //   return;
    // } 이 함수는 아무것도 지정되지 않았기 때문에 실행되지 않는다
  
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        element.current.addEventListener("click", onClick);
      }
      return () => {
        if (element.current) {
          element.current.removeEventListener("click", onClick);
        }
      };
    }, []);
    return element;
  };
  
  const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
      <div className="App">
        <h1 ref={title}>Hi useClick</h1>
      </div>
    );
  };