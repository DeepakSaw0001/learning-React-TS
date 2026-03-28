// import Message from "./Message";
import "bootstrap/dist/css/bootstrap.min.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import AlertDismiss from "./components/AlertDismiss";
import { useState } from "react";
function App() {
  let items = ["India", "pakistan", "London", "Paris"];
  let state = ["Maharashtra", "Gujarat", "Rajasthan", "Punjab"];

const [visibility,setvisibility] = useState(false);

  return (
    <>
      {/* <Message></Message> */}
      {/* <ListGroup heading="countries" items={items}></ListGroup>
  <ListGroup heading="states" items={state}></ListGroup> */}
      {visibility && <Alert onClick={()=> setvisibility(false)}>My Alert</Alert>}

      <Button color="primary" onclick={()=>setvisibility(true)}>My Button</Button>
    </>
  );
}
export default App;
