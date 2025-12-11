const vue_app = Vue.createApp({
    data() {
        return {
            title: "IS219 Movie Gallery",
            owner: "Anthony Brigante",
            github: "https://github.com/username/repo",
            movies: []
        }
    }
});
vue_app.mount("#vue_app");
