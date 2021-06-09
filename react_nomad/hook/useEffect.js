/*  "useEffect" is ComponentDidMount, 
  ComponentWillMount, ComponentDidUpdate */

/* ** Dependency에 대하여 다시한번 집고 넘어가자** */

  const App = () => {
    const sayHello = () => console.log("hello");
    const [number, setNumber] = useState(0);
    const [aNumber, setAnumber] = useState(0);
    useEffect(sayHello, [number]);
    return (
      <div className="App">
        <div>
          <h2>Hello useEffect!</h2>
        </div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      </div>
    );
  };