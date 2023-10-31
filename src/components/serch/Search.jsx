import { useState,useEffect } from "react";

function Search() {
    const [users, setUers] = useState([]);
    const [search, setSearch] = useState('');
    const [searchItem, setSearchItem] = useState([]);




    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        setUers(res)
    });

    }, []);


    const searchHandler = (e) => {
        setSearch(e.target.value);
        setSearchItem(() => {
            return users.filter((data) =>  data.name.toLowerCase().includes(e.target.value.toLowerCase()))
        })
    }

    return(
        <>

                <label htmlFor="search">Search</label>
                <input type="text" name="search" id="search" value={search} onChange={searchHandler} />

            <ul>
                { search ?
                    searchItem.map((data) => (
                        <li key={data.id}>
                              {data.name}
                        </li>
                    )) : ""
                }
            </ul>
        </>
    )
}

export default Search;