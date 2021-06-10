/* online, offline의 상태를 나타낼 수 있다 */

const useNetWork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChage = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleChage);
      window.addEventListener("offline", handleChage);
      () => {
        window.removeEventListener("online", handleChage);
        window.removeEventListener("offline", handleChage);
      };
    }, []);
    return status;
  };
  
  const App = () => {
    const handleNetworkChange = (online) => {
      console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetWork(handleNetworkChange);
    return (
      <div className="App">
        <h1>{onLine ? "OnLine" : "OffLine"}</h1>
      </div>
    );
  };