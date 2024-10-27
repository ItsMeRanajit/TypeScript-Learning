type RandomNumberType = {
    value : number
}

type PosNum = RandomNumberType & { // the & means the posnum contains all the type of ranodomnumbertype and also its type, means value , ispostiive ...etc
    isPositive : boolean,
    isNegative? : never, // never means if postive number is set then isnegative cannot be set or shold not passed both together
    isZero? : never
}

// it its pos then negative isnot set and zero is not set, that makes sense

type NegNum = RandomNumberType & { 
    isPositive? : never,
    isNegative : boolean, 
    isZero? : never
}
type zeroNum = RandomNumberType & { 
    isPositive? : never,
    isNegative? : boolean, 
    isZero : boolean
}

type RandomNumberTypeProp = PosNum | NegNum | zeroNum// this is the main type. which says a number can be any one of htem



// so in app.tsx these cannot possible
// <Comp value={3} PosNum zeroNum>
// <Comp value={3} PosNum zeroNum negnum>
// <Comp value={3} PosNum zeroNum> ... etx