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
        //const repos = [];
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
            //repo.readme = 
          })
          .then((response) => {
              this.repos.readme = response.data
              console.log(repos)
          })
          .catch((err)=>{
            console.log(err)
          })
        })
     })
  }
  // mounted() {
  //   axios('https://api.github.com/users/trezp/repos?sort=updated')
  //   .then((response) => {
  //     //console.log(response)
  //     for (let i = 0; i <= 10; i++){
  //       this.repos.push(response.data[i]);
  //       // axios(`https://api.github.com/repos/trezp/${response.data[i].name}/readme`,{
  //       //   headers: {
  //       //     "Accept": "application/vnd.github.VERSION.raw"
  //       //   }
  //       // })
  //       // .then((response) => {
  //       //   console.log(this.repos)
  //       //   this.readme = response.data
  //       //   this.repos.forEach(repo => repo.readme = response.data)
  //       // });
  //     }

  //     //console.log(this.repos)
  //   });
  // }
});