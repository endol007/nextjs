import axios, { AxiosResponse } from 'axios';

interface boardType {
    id: number;
    name: string;
    title: string;
    comment: string;
}

export const getData = async () => {
    try {
      const response: AxiosResponse<unknown, boardType[]> = await axios.get('http://localhost:4000/boards');
      return response.data;
    } catch (err) {
      return err;
    }
};

export const postData = async (payload: {title: string, name: string, comment: string}) => {
    try {
      const response: AxiosResponse<unknown, boardType> = await axios.post('http://localhost:4000/boards', payload);
      return response.data;
    } catch (err) {
      return err;
    }
};

export const deleteData = async (id: number) => {
    try {
      const response: AxiosResponse<any> = await axios.delete(`http://localhost:4000/boards/${id}`);
      return response.data
    } catch (err) {
      return err;
    }
}

export const updateData = async (payload: boardType) => {
    try {
      const data = {
        name: payload.name,
        title: payload.title,
        comment: payload.comment
      }
      const response: AxiosResponse<unknown, boardType> = await axios.put(`http://localhost:4000/boards/${payload.id}`, data);
      return response.data;
    } catch (err) {
      return err;
    }
}

