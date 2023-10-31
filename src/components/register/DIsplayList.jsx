function DisplayList({users}) {

    console.log(users,"////");
    return(
       <> 
       <h1>Display list</h1>
       <table>
        <tbody>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Phone</th>
            </tr>
                {
                    users.length > 0 && users.map((data, i) => (
                        <tr key={i} >
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.phone}</td>

                        </tr>
                    ))
                }
            
        </tbody>
       </table>
       </>
    )
}

export default DisplayList;