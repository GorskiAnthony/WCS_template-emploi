import React, {useEffect, useState} from 'react';
import axios from 'axios';

const CardJobs = ({token}) => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            const result = await axios.get('https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/3136452', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const data = await result.data;

            setJobs(data);
        }
        fetch();
        console.log(jobs);
    }, [token])

    return (
        <div>
            <h1>CardJobs</h1>
        </div>
    )

}

export default CardJobs;