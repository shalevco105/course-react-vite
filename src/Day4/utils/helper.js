import axios from 'axios';

export const getData = async (url) => {
    const { data: response } = await axios.get(url);
    return response;
};

export const getDataById = async (url,id) => {
    const { data: response } = await axios.get(url + '/' + id);
    return response;
};

export const postData = async (url, args) => {
    const { data: response } = await axios.post(url, args);
    return response;
};

export const updateData = async (url, id, updatedData) => {
    const { data: response } = await axios.put(url + '/' + id, updatedData);
    return response;
};

export const deleteData = async (url, id) => {
    const { data: response } = await axios.delete(url + '/' + id);
    return response;
};