//declarar un arreglo de objetos con frases
const frases = [{frase: 'El que madruga Dios le ayuda', autor: 'Luis Valladares'},
    {frase: 'El que no arriesga no gana', autor: 'Roberto Aguass'},
    {frase: 'El que no llora no mama', autor: 'Anthony Tipan'},
    {frase: 'El que no corre vuela', autor: 'Oli Iza'},
    {frase: 'No dejes que el miedo te impida ser feliz', autor: 'Andre Beltran'},
    {frase: 'El que mucho poco aprieta', autor: 'Jossue Cevallos'},
    {frase: 'Si quieres, puedes', autor: 'Carlos Velez'},
]

const app = Vue.createApp({
   
   methods: {
      
   },

  
   data(){
      return {
        listafrases: frases,
         
      }
   }
})

app.mount('#myApp')
