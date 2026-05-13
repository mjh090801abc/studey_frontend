function Body(p) {
    const {name, drink} = p
    console.log(name, drink)
    const number = 20
    return (
        <div>
            {name}은 {drink}에 조예가 깊습니다. 나이는 {number}입니노
        </div>
    );

}

export default Body