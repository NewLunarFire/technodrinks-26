export default {
    saveLists(state, lists) {
        lists.forEach((list) => {
            state.lists[list.name] = list.entries;
        });
    },
    changeLanguage(state, lang) {
        state.lang = lang;
    }
}