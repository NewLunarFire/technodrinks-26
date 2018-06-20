<template>
    <div>
        <select v-model="selectedStatus">
            <option v-for="status in ['Completed', 'Dropped', 'Paused', 'Planning']" :key="status" :status="status">{{status}}</option>
        </select>
        <button v-on:click="getList">Get Anime List</button>­ <span class="anime-count">[{{$tc("anime", animeCount, {count: this.animeCount})}}]</span>
        <table>
            <thead>
                <tr>
                    <th class="table-title">Title</th>
                    <th class="table-score">Score</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in sortedList" :key="entry.id">
                    <td>{{entry.media.title.userPreferred}}</td>
                    <td>{{entry.score}}</td>
                </tr>
            </tbody>
        </table>    
    </div>    
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: "AnimeList",
    computed: {
        sortedList() {
            var list = this.$store.state.lists[this.selectedStatus];
            if(!Array.isArray(list)) {
                return;
            } else {
                return list.sort((a, b) => (a.score === b.score)
                    ? a.media.title.userPreferred > b.media.title.userPreferred
                    : a.score < b.score)
            }
        },
        animeCount() {
            return this.$store.state.lists[this.selectedStatus].length;
        }
    },
    data() {
        return {
            selectedStatus: "Completed"
        }
    },
    methods: {
        getList() {
            this.$store.dispatch('getList');
        }
    }
}
</script>

<style scoped>
button {
    background-color: darkgreen;
    color: whitesmoke;
    font-size: 1.5em;
}

button, select, .anime-count {
    font-size: 1.5em;
}

table {
    border: 1px solid black;
    border-collapse: collapse;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 80%;
}

tr {
    border: solid thin;
}

td, th {
    border-left: 1px solid black;
    padding-top: 1%;
    padding-bottom: 1%;
}

.table-title {
    width: 90%;
}

.table-score {
    width: 10%;
}
</style>
