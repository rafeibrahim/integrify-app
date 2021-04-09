import React from "react";
import PersonCard from "../Components/PersonCard";
import useFetch from "../Hooks/useFetch"


const UsersMainScreen = () => {
    const usersURL = "https://jsonplaceholder.typicode.com/users"

    const usersData = useFetch(usersURL);
    return (
        <div className ="app-container">
            <div className ="person-container">
                {
                    usersData.map((person) =>  (
                        <PersonCard
                            key = {person.id}
                            id = {person.id}
                            name = {person.name}
                            username = {person.username}
                            website = {person.website}
                        />
                    ))            
                }
            </div>
        </div>
    )
}

export default UsersMainScreen;