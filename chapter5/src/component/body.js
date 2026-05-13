function Body({name, location, breed}) {
    console.log(name, location, breed)
    return (
        <div>
            {name}은 {location}에 살고 있습니다.
            <br></br>
            {breed.length}개의 품종이 있습니다.
        </div>
    );

}

export default Body