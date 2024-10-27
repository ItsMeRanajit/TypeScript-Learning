// positions can be "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right"


type Horizontal = "left"|"right"|"center"
type vertical = "top" | "center"| "bottom"

type position = {
    position : Exclude<`${Horizontal}-${vertical}`, "center-center"> | "center" //hover on positon key to see the created psotions.
    //so we didnt had to write all the postions , we can just do that wihcih is cool
    // and whatever passed by the parent to this component, if it matches the created positons then itll work completely fine

    // so the exclude si another cool thing, so we were getting center-cente whihc is meaning less, so Exclude<`${Horizontal}-${vertical}`, "center-center"> | "center" deos not consider center-center. the syntax is exclude<template, items to exclude>.
    // we also given | center which helps to get the cetner
}