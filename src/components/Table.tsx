import { useEffect, useState } from 'react';

function Table() {
    const [data, setData] = useState<any[]>([]);
    const getData = () => {
        fetch('../data/data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            {
                data && data.length > 0 && data.map((item) => <p>{item.length}</p>)
            }
        </div>
    );
}

export default Table
