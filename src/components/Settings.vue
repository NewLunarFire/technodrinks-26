<template>
    <div>
        <label>Language</label>
        <select :value="lang" v-on:change="changeLanguage">
            <option value="fr">Français</option>
            <option value="en">English</option>
            <option value="ja">日本語</option>
        </select>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'Settings',
    computed: mapState([
        'lang'
    ]),
    methods: {
        changeLanguage(event) {
            const lang = event.target.value;
            this.$i18n.locale = lang;
            this.$store.dispatch("changeLanguage", lang);
        }
    }
}
</script>
