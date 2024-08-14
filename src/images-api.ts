import axios from 'axios';
const ACCESS_KEY = 'MWRqbg98yppLHLBqEia6MuiVEzqRtgJRE5Pae0mD3d8';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export type Image = {
    id: string;
    alt_description: string;
    width: number;
    urls: {
        small: string;
        regular: string;
    };
}

type AxiosResponse = {
    results: Image[];
    total_pages: number;   
}

export const fetchImages = async (search: string, currentPage: number): Promise<AxiosResponse> => {
 
      const response = await axios.get<AxiosResponse>('search/photos', {
          params: {
              query: search,
              client_id: ACCESS_KEY,
              orientation: 'landscape',
              page: currentPage,
              per_page: 15,
          }
      });
      return {
          results: response.data.results || [],
          total_pages: response.data.total_pages || 0,
      };
 
};