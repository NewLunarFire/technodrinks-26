import queries from './queries';

export default {
    getList(context) {
        // Make the HTTP Api request
        fetch('https://graphql.anilist.co', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: queries.getAnimeList,
                variables: {
                    id: 144850,
                    listType: 'ANIME'
                }
            })
        }).then((response) => {
            return response.json().then(function (json) {
                return response.ok ? json : Promise.reject(json);
            });
        }).then((data) => {
            console.log(data.data.MediaListCollection)
            context.commit('saveLists', data.data.MediaListCollection.lists);
        }).catch((error) => {
            console.error(error);
        });
    },
    changeLanguage(context, lang) {
        localStorage.setItem("lang", lang);
        context.commit('changeLanguage', lang);
    }
}