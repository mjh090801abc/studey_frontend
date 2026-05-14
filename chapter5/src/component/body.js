import { useState } from "react"

function Body() {
    const [text, setText] = useState("")
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return(
        <div>
            <input value={text} onChange={handleOnChange} />
            <div>입력한 글자 : "{text}" 입니노</div>
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