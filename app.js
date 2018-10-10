new Vue({
  el: "#app",
  data: function(){
    return {
      repos: [],
    }
  },
  mounted() {
    axios('https://api.github.com/users/trezp/repos?sort=updated')
    .then((response) => {
      for (let i = 0; i <= 10; i++){
        this.repos.push(response.data[i]);
        axios(`https://api.github.com/repos/trezp/${response.data[i].name}/readme`,{
          headers: {
            "Accept": "application/vnd.github.VERSION.raw"
          }
        })
        .then(response => console.log(response));
      }
    });
  }
});