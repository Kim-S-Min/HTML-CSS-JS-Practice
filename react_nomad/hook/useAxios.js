/* 이해가 안된다.... 뇌용량 초과.... 강의 다시보고 코딩 진행방향을 알아볼것 */


const App = () => {
    const { loading, data, refetch } = useAxios({
      url: "https://yts.am/api/v2/list_movies.json"
    });
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <h1>{data && data.status}</h1>
        <h2>{loading && "Loading"}</h2>
        <button onClick={refetch}>Refetch</button>
      </div>
    );
  };

  



import { useState, useEffect } from "react";
import defaultAxios from "axios";

const useAxios = (opts, axiosInstance = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [trigger]);
  return { ...state };
};

export default useAxios;