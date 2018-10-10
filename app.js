new Vue({
  el: "#app",
  data: function(){
    return {
      repos: ""
    }
  },
  mounted () {
    axios('https://api.github.com/users/trezp/repos?sort=updated')
    .then((response) => {
      console.log(response)
      let first10results = [];
      for (let i = 0; i <= 10; i++){
        first10results.push(response.data[i]);
      }
      this.repos = first10results;
    }).then(function(){
      axios('https://api.github.com/repos/trezp/flashcards-vue/contents/readme.md')
      .then(response => console.log(response))
      //application/vnd.github.VERSION.raw
    })
  }
});