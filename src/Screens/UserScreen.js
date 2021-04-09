import React, { useEffect, useState } from 'react';
import PersonDetail from "../Components/PersonDetail";
import { useParams } from "react-router-dom";

const UserScreen = () => {
    let { id } = useParams();
    let userUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    console.log(userUrl);
    const [userData, setUserData] = useState(null)

    const getUser = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('getUsers error: ' + response.status);
        };
        const json = await response.json();
        setUserData(json)
    };

    useEffect(() => {
        getUser(userUrl);
    }, [userUrl]);

    return (
        <div className= "details-container">
            <div className= "details-block">
                {userData && (
                    <PersonDetail 
                        name={userData.name}
                        username={userData.username}
                        email={userData.email}
                        phone={userData.phone}
                        company={userData.company.name}
                        website={userData.website}
                        street={userData.address.street}
                        suite={userData.address.suite}
                        city={userData.address.city}
                        zipcode={userData.address.zipcode}
                    />
                )}
            </div>
        </div>
    );
};

export default UserScreen;



