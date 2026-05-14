function Body() {
    function handleOnClick(event) {
        console.log(event)
        console.log(event.target.name)
    }
    return (
        <div>
            <button name="A버튼" onClick={handleOnClick}></button>
            <button name="B버튼" onClick={handleOnClick}></button>
        </div>
    );

}

export default Body