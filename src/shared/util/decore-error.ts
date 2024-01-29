import axios, {AxiosError} from 'axios';

export default (error: any) => {
  if (axios.isAxiosError(error)) {
    const data = (error as AxiosError).response?.data as any;

    if (data.message) return data.message;
    if (data.messages) return Object.values(data.messages[0]);
  }

  return error;
};
