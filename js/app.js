console.log(Vue);

const app = Vue.createApp({
   // template: `
   //    // <h1>Hola Mundo</h1>
   //    // <p> Con Vue.JS </p>
   //    // <p>{{ 2 + 2 }}</p>
   //    // <p>{{[1,2,3,4,5,6,7]}}</p>
   //    // <p>{{ {nombre: 'Roberto', apellido: 'Aguas'} }}</p>
   //    // <p> {{true ? 'Activo': 'Inactivo'}} </p>
   //    // <p> 1===1 </p>
   //    // <p> {{1===1}} </p>
   // `

   //OPTIONS API
   //los metodos se declaran como funciones
   methods: {
      cambiarMensaje(){
         this.mensaje = 'Mensaje Cambiado';
         this.edad = 25;
      }

   },

   //En la data crea Propiedades reactivas que permite comunicarme entre mi codigo JS y mi HTML
   data(){
      return {
         mensaje: 'Hola Mundo con Vue',
         edad: 23

      }
   }
})

app.mount('#myApp')
