/* 페이지가 시작할때 딜레이가 걸리고 해당 문서들의 등장시간과 투명도를 조절할 수 있다 
    useEffect를 이용해서 여러 애니메이션 효과들을 나타낼 수 있다*/

const useFadeIn = (duration = 1, delay = 0) => {
    if (typeof duration !== "number" || typeof delay !== "number") {
      return;
    }
  
    const element = useRef();
    useEffect(() => {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;
      }
    }, []);
    return { ref: element, style: { opacity: 0 } };
  };
  
  const App = () => {
    const fadeInH1 = useFadeIn(1, 2);
    const fadeInP = useFadeIn(5, 10);
    return (
      <div className="App">
        <h1 {...fadeInH1}>Hello</h1>
        <p {...fadeInP}>lorem ipsum lalalalal</p>
      </div>
    );
  };