import { FLICKR, DEFAULTS } from './Constants';

export const generateApiUrl = (searchText, page = DEFAULTS.PAGE, per_page = DEFAULTS.PERPAGE) => {
    return `${FLICKR.BASE_URL}${FLICKR.SEARCH}${searchText}${FLICKR.API_KEY}${FLICKR.EXTRAS}${FLICKR.FORMAT}&page=${page}&per_page=${per_page}`;
}