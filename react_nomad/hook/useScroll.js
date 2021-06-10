/* useScroll 특정 스크롤위치에 따라 css의 변화를 줄수 있는 Hook이다 */

const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      setState({ y: window.scrollY, x: window.scrollX });
    //   console.log("y ", window.scrollY, "x ", window.scrollX);   스크롤시 현재 위치를 파악할 수 있다
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll); //  event를 넣었다면 같은이름과  같은hander로 지워야한다
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
  };
  
  const App = () => {
    const { y } = useScroll();
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>Hi</h1>
      </div>
    );
  };