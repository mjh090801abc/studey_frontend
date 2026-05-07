function Body() {
    const obj = {
        sc: "상철",
        yj: "용준"
    }
    return(
        <div>
            <h1>Body</h1>
            <h2>{obj.sc}</h2>
            <h2>{obj.yj}</h2>
        </div>
    );
}

export default Body