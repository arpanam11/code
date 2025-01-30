
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const GetAPI = () => {
    const [data, setData] = useState([]);


    const getData = async () => {

        try {

            const response = await axios.get('https://fakestoreapi.com/products');

            console.log(response.data);

            setData(response.data);

        } catch (error) {

            console.error('Error fetching data:', error);

        }

    };
    useEffect(() => {

        getData();

    }, []);

    return (
        <div>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default GetAPI