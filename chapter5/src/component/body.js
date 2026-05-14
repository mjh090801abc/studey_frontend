import { useState } from "react"

function Body() {
    
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [birth, setBirth] = useState("")
    const [bio, setBio] = useState("")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeGender = (e) => {
        setGender(e.target.value)
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value)
    }

    const onChangeBio = (e) => {
        setBio(e.target.value)
    }

    return(
        <div>
            <div>
                <div>
                    <input value = {name} onChange={onChangeName} placeholder="이름" />
                </div>
            </div>
            <div>
                <select value={gender} onChange={onChangeGender}>
                    <option>남성</option>
                    <option>여성</option>
                    <option>양성애자</option>
                </select>
            </div>
            <div>
                <input type="date" value={birth}onChange={onChangeBirth}></input>
            </div>
            <div>
                <textarea value={bio} onChange={onChangeBio}></textarea>
            </div>
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