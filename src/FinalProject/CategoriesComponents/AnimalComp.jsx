import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';

export const AnimalComp = () => {

    const dispatch = useDispatch();

    const fetchImagesByCategory = async (category) => {
        const response = await axios.get(`https://pixabay.com/api/?key=44995311-1f7bd2e84f99921396b97cc2b&q=${category}&image_type=photo`);

        const images = response.data.hits.slice(0, 5).map(image => ({
            largeImageURL: image.largeImageURL
        }));
        console.log(images);
        return images;
    };

    const setImages = async (category) => {
        let images = await fetchImagesByCategory(category)
        dispatch({ type: "UPDATE_IMAGES", payload: images });
    }

    return (
        <div style={{ border: "100px #b281eb90", padding: "100px", background: "#b281eb48", borderRadius: "15px", margin: "10px" }}>
            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setImages(`Dolphin`)}>Dolphin</button>
            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setImages(`Monkey`)}>Monkey</button>
            <button style={{ padding: "10px", margin: "10px" }} onClick={() => setImages(`Donkey`)}>Donkey</button>
        </div>
    )
}

export default AnimalComp;