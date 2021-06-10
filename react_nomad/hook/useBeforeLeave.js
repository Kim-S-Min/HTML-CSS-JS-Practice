/* 마우스가 움직이거나 해당 페이지를 떠나려고 상단 독바에 다가갈 때 메세지와 같은 이벤트를 발생시킬 수 있다 
  useEffect를 이용한 Hook이다 */

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const handle = event => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", handle);    //  mouseleave를 mousemove로 바꾸고 설정을 한다면 마우스가 움직일 때 반응을 나타낼 수 있다
      return () => document.removeEventListener("mouseleave", handle);          
    }, []);
  };
  
  const App = () => {
    const begForLife = () => console.log("plz dont leave");
    useBeforeLeave(begForLife);
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  };