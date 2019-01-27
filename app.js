new Vue({
  el: "#app",
  data: function(){
    return {
      repos: [],
      readme: ""
    }
  },
  mounted() {
    axios('https://api.github.com/users/trezp/repos?sort=updated')
      .then((response) => {
        for (let i = 0; i <= 10; i++){
          this.repos.push(response.data[i]);
        }
    })
    .then((repos)=>{
      console.log(this.repos)
      this.repos.forEach((repo) => {
        axios(`https://api.github.com/repos/trezp/${repo.name}/readme`,{
          headers: {
            "Accept": "application/vnd.github.VERSION.raw"
          }
        })
        .then((response) => {
            this.repos.readme = response.data
            console.log(repos)
        })
        .catch((err)=>{
          console.log(err)
        });
      });
    });
  }
});