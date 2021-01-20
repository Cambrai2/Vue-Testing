const vm = new Vue({
    el: '#app',
    data: {
        results: []
    },
    mounted() {
        axios.get("https://api.github.com/repositories")
            .then(response => { this.results = response.data})
    }
});
setTimeout(function () {
    $('#app').DataTable();
}, 1000);

