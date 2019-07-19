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
    });
  }
});