import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList,
    fetchUserInfo,
    fetchAskDetail 
} from '../api/index';

const actions = {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            console.log(response.data)
            context.commit('SET_NEWS', response.data);
            this.state.news = response.data;
        })
        .catch(function(error) {
            console.log(error)
        })
    },
    FETCH_JOBS({commit}){
        fetchJobsList()
        // 디스럭처링
        .then(({data}) => {
            commit('SET_JOBS', data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_ASK(context) {
        fetchAskList()
        .then(response => {
            context.commit('SET_ASK', response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    FETCH_USER( {commit}, name ) {
        fetchUserInfo(name)
        .then(( { data } ) => {
            commit('SET_USER', data);
        })
        .catch(error => {
            console.log(error)
        });
    },
    FETCH_ITEM({commit}, id) {
        fetchAskDetail(id)
        .then(({ data }) => {
            console.log(data)
            commit('SET_ITEM', data);
        })
        .catch(error => {
            console.log(error)
        })
    }
}




export default actions