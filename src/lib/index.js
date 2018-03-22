import Axios from 'axios';
import { generateApiUrl } from '../Utils';

export default {
    searchPhotos: (searchText, page, limit) => {
        let url = generateApiUrl(searchText, page, limit);
        return new Promise((resolve, reject) => {
            if (searchText !== "") {
                Axios.get(url).then(({ data }) => {
                    try {
                        let response = JSON.parse(data.substring(14, data.length - 1));

                        resolve(response.photos);
                    } catch (err) {
                        reject(err);
                    }
                }).catch((Err) => {
                    reject(Err)
                });
            } else {
                resolve({ photo: [] })
            }
        });

    }
}