

let greeting = {
    sex: "",
    women: "Hey girl",
    man: "Hey dude",
    other: "Hey dud@" // properties
}




let message = null
  if(greeting.sex === greeting.women){
    message = greeting.women
  } else if(greeting.sex === greeting.man){
    message = greeting.men
  }else{
    message = greeting.other
  }

function App() {
  return (
    <>
      {/* <h1>{greetings.sex === "man" ? greetings.man : greetings.women}</h1> */}
      <h1>{message}</h1>
      <button onClick={() => alert ('Hi world')}>HI THERE</button>
      <h2></h2>
    </>
  );
}

export default App;
