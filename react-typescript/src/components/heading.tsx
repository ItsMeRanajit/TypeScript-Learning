
type headingprop = {
    children : string
}

 const heading = (props : headingprop) => {
    return <h1>huba chiba {props.children}</h1>
}
export default heading