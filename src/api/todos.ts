import Api from '@api/apiCall';

const getTasks = async () => {
  try {
    console.log(import.meta.env.VITE_BASE_URL);
    const response = await Api.get(`${import.meta.env.VITE_BASE_URL}/todo`);
    console.log(response);
    return response?.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createTask = async (data: { title: string }) => {
  try {
    const { title } = data;

    const payload = {
      title,
    };

    const response = await Api.post(
      `${import.meta.env.VITE_BASE_URL}/todo`,
      payload,
    );

    return response?.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const editTask = async (data: { id: string; title: string }) => {
  try {
    const { id, title } = data;

    const payload = {
      title,
    };

    const response = await Api.put(
      `${import.meta.env.VITE_BASE_URL}/todo/${id}`,
      payload,
    );

    return response?.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteTask = async (data: { id: string }) => {
  try {
    const { id } = data;

    const response = await Api.delete(
      `${import.meta.env.VITE_BASE_URL}/todo/${id}`,
      {},
    );

    return response?.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const completeTask = async (data: { id: string }) => {
  try {
    const { id } = data;

    const response = await Api.put(
      `${import.meta.env.VITE_BASE_URL}/todo/complete/${id}`,
      {},
    );

    return response?.data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getTasks, editTask, createTask, deleteTask, completeTask };
