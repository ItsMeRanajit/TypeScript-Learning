type greetProps = {
  name? : String,  //giving a ? means this item is optional. it maynot be given by the parent
  messages : number
}// we have made a object and assigned with types
const Greet = (props : greetProps) => { // and declraing the props object of the type that we made

  const {name = "Guest" } = props // we used object destucturing. and if the value doesnot exists as it is optional the name key in the prop will hold Guest. and we destuctured the value . thats why we can directly use name
  return (
    <div><h1>welcome {name}. You have {props.messages === 0 ? "no" : props.messages} unread massages</h1></div>
  )
}

export default Greet


//typing props

