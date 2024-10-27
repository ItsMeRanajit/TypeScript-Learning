type listprop<T> = {
    items : T[],
    onClick : (value : T) => void
}

const list = < T extends {} > ({items, onClick} : listprop<T>) => {
    return (
        <div>
            <h2>LIst of items</h2>
            {items.map((item, index) => {
                return (
                    <div key = {index} onClick={() => onClick(item)}>
                        {item} 
                        {/* this errror bcz item could be object and jsx and tsx cannot display objects directly */}
                    </div>
                )
            })}
        </div>
    )
}
export default list

//generic props - like java generics. can hold any value. itemsT[] means any type of datatype but must be an array, onclick value : T means the onclick shold be applied on only T type or other type that given.

// ts dont knwo what T is thats why we need to put <T extends {}> at where it is. {} means the T can be any type, we can also put some value to limit the T. 
//like <T extends string | number> means T can be only thse two