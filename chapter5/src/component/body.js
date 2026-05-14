function Body() {
    function handleOnClick() {
        alert("버튼을 클릭하셨군요")
    }
    return (
        <div>
            <button onClick={handleOnClick}
            >클릭해보삼소</button>
        </div>
    );

}

export default Body