function Body() {
    // const obj = {
    //     sc: "상철",
    //     yj: "용준"
    // }

    const number = 10;

    return(
        <div>
            <h1>Body</h1>
            <h2>{number}은 {number % 2 === 0 ? "짝수" : "홀수"}입니다잉</h2>
        </div>
    );
}

export default Body