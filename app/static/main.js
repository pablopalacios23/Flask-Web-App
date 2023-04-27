const app = new Vue({
    el: '#app',
    data: {
        preguntas: [],
    },
    mounted() {
        axios.get('/preguntas').then(response => {
            this.preguntas = response.data;
        }).catch(error => {
            console.log(error);
        });
    },
    enviarRespuestas() {
        axios.post('/guardar-respuestas', {respuestas: this.preguntas})
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
      
});
