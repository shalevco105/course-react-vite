import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const CityComp = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();

    const navigateToSummeryPage = (e) => {
        localStorage.setItem('city', selectedOption);
        navigate(`/summeryPage`);
    }

    return (
        <div>
            <select id="dropdown" value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Select A City PLZ</option>
                <option value="Sydney">Sydney</option>
                <option value="Vancouver">Vancouver</option>
                <option value="Milan">Milan</option>
            </select>
            <br />
            <p>Selected Option: {selectedOption}</p>

            <input type="button" value="Go To the Summary Page" onClick={navigateToSummeryPage} />

        </div>
    )
}

export default CityComp;