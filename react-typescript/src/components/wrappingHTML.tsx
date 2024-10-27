import React from "react"

type buttonProp = {
    variant : 'primary' | 'secondary'
    children : string
} & Omit<React.ComponentProps<'button'>, 'children'> // this helps to get all the remaining props as it is passed
//but the props must be props suitable for the mentoined tag. for here all for butotn like onlcick , disabled, type etc
//Omit - without omit when we hovered on the children in params it said it supports both compprops and string, omit says we need to ignore the chilren to apply compprops

//variant does not have both types bcz its not a suitable prop for the button, so we cannot make it a compprop

const customButton = ({variant, children, ...rest} : buttonProp) => {
    return <button className={`class-${variant}`} {...rest}>{children}</button>
}
export default customButton