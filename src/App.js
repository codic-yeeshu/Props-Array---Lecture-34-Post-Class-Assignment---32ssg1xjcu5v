import "./App.css";

const arr = JSON.parse(
  window.localStorage.getItem("props") || `["hello","world"]`
); // do not change

const Join = ({words}) => {
  return <div id="join">
    {words.join(',')}
         </div>;
};

const App = () => {
  return (
    <div id="main">
      <Join words={arr}/>
    </div>
  );
};

export default App;
