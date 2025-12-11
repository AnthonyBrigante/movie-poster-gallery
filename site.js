const vue_app = Vue.createApp({
    data() {
        return {
            title: "IS219 Movie Gallery",
            owner: "Anthony Brigante",
            github: "https://github.com/username/repo",
            movies: []
        }
    },
    methods: {
        makeTextDate(dateArray){
            const [year, month, day] = dateArray;
            return `${month}/${day}/${year}`;
        },
        timeText(minutes){
            const h = Math.floor(minutes/60);
            const m = minutes % 60;
            return `${h}h ${m}m`;
        },
        like(index){ this.movies[index].likes++; },
        dislike(index){ this.movies[index].dislikes++; },
        posterClick(index){
            let movie = this.movies[index];
            movie.posterindex = (movie.posterindex + 1) % movie.posters.length;
        }
    }
});
vue_app.mount("#vue_app");
