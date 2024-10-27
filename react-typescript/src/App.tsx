import Greet from './components/greet';
import Person from './components/Person';
import PersonList from './components/personList';
import Status from './components/status'
import Head from './components/heading'
import Oscar from './components/oscar';
import Btn from './components/button'
import Input from './components/input'
import Style from './components/style'
import State from './state/loggedIn'
import { ThemeContextProvider } from './context/themeContext';
import { Box } from './context/Box';
import { Usercontenxtprovider } from './context/futureContext';
import { User } from './context/user';
import PassComponent  from './components/passComponent';
import passCompComp from './components/passCompComp';
import Generic from './components/generic'
import Wrppping from './components/wrappingHTML'
import './App.css';

function App() {
  const personNm = {
    first : 'ranajit',
    last : 'das'
  }
  const personNmList = [
    {first : 'ranajit',
    last : 'das'},
    {first : 'hulu',
    last : 'das'},
    {first : 'bhulu',
    last : 'das'},


    ]
  return (
    <div className="App">
      <Greet name={"ranajit"} messages = {0}/>
      <Person name = {personNm} ></Person>
      <PersonList arr = {personNmList}></PersonList>
      <Status status='loading'></Status>
       <Head>placeholder</Head>
       <Oscar>
        <Head>oscar goes to lionel messi</Head>
       </Oscar>
       <Greet messages={999}></Greet>
       <Btn handleClick= { (event, id) => {console.log("button clicked",event,id)}}></Btn>
       <Input value='' handleChange={(event) => console.log(event)}></Input>
       <Style style={{border :'2px solid red', padding: '1rem'}}></Style>
       <State></State>
       <ThemeContextProvider>
        <Box/>
        </ThemeContextProvider>
        <Usercontenxtprovider>
          <User/> 
        </Usercontenxtprovider>
        <PassComponent isLogged = {false} component={passCompComp}></PassComponent>
        <Generic items={[1,2,3]} onClick={(item) => console.log(item)}></Generic>
        <Generic items={["ranajit"]} onClick={(item) => console.log(item)}></Generic>
        <Wrppping variant='primary'  onClick={()=> console.log("je")}>Hello</Wrppping>
    </div>
  );
}

export default App;
