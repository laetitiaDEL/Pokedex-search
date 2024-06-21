
export function SearchBar({onChangeSearch}){
    function handleForm(event){
        event.preventDefault();
        const inputText = (new FormData(event.target)).get("search");
        onChangeSearch(inputText);
        event.target.reset();
    }

    return (
        <div style={{display: "flex", textAlign: "center"}}>
            <form onSubmit={handleForm} style={{textAlign: "center"}}>
                <input placeholder="Search Pokémon" type="text" name="search"/>
                <button id="searchBtn">Search</button>
            </form>

        </div>
    )
}