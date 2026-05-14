import { useState } from "react"

function Body() {
    const [count, setCount] = useState(0)
    const onIncrease = () => {
        setCount(count + 1)
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>증가
            </button>
        </div>
    )



    // function handleOnClick(event) {
    //     console.log(event)
    //     console.log(event.target.name)
    // }
    // return (
    //     <div>
    //         <button name="A버튼" onClick={handleOnClick}></button>
    //         <button name="B버튼" onClick={handleOnClick}></button>
    //     </div>
    // );

}

export default Body