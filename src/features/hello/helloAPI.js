export const loadMoviesAPI = () => fetch("https://pcw-api.iqiyi.com/search/recommend/list?channel_id=1&data_type=1&mode=11&page_id=2&ret_num=48").then((res) => res.json())
