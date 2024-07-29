import React, { useState } from 'react';
import SportsComp from './CategoriesComponents/SportsComp';
import AnimalComp from './CategoriesComponents/AnimalComp';
import PlantsComp from './CategoriesComponents/PlantsComp';

export const CategoriesComp = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const updateCategory = (category) => {
        setSelectedCategory(category);
    }
    
    return (
        <div style={{ border: "10px #f094dc88", padding: "50px", background: "#f094dc57", borderRadius: "15px" }}>
            <button type="button" style={{ margin: "10px" }} onClick={() => updateCategory('Sports')}>Sports</button>
            <button type="button" style={{ margin: "10px" }} onClick={() => updateCategory('Animals')}>Animals</button>
            <button type="button" style={{ margin: "10px" }} onClick={() => updateCategory('Plants')}>Plants</button>

            {selectedCategory === 'Sports' && <SportsComp />}
            {selectedCategory === 'Animals' && <AnimalComp />}
            {selectedCategory === 'Plants' && <PlantsComp />}
        </div>
    )
}

export default CategoriesComp;
