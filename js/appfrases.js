//declarar un arreglo de objetos con frases
const frases = [{ frase: 'El que madruga Dios le ayuda', autor: 'Luis Valladares' },
{ frase: 'El que no arriesga no gana', autor: 'Roberto Aguass' },
{ frase: 'El que no llora no mama', autor: 'Anthony Tipan' },
{ frase: 'El que no corre vuela', autor: 'Oli Iza' },
{ frase: 'No dejes que el miedo te impida ser feliz', autor: 'Andre Beltran' },
{ frase: 'El que mucho poco aprieta', autor: 'Jossue Cevallos' },
{ frase: 'Si quieres, puedes', autor: 'Carlos Velez' },
]

const app = Vue.createApp({

   methods: {
      agregarFrase() {
         console.log(this.frase)
         console.log(this.autor)
         const nuevaFrase = { 
            frase: this.frase,
            autor: this.autor 
         }
         // El unshift se utiliza para agregar un elemento al inicio de un arreglo
         this.listafrases.unshift(nuevaFrase)
      },
      agregarFraseFinal() {
         console.log(this.frase)
         console.log(this.autor)
         const nuevaFrase = { 
            frase: this.frase,
            autor: this.autor 
         }
         // El push se utiliza para agregar un elemento al final de un arreglo
         this.listafrases.push(nuevaFrase)
      },
      eventoKeyPress({charCode, cancelable, key, keyCode, target}) {

         if(key === 'Enter'){
            console.log('Evento');
           // console.log(event);
            console.log(charCode);
            console.log(cancelable);
            console.log(key);
            console.log(keyCode);
            console.log(target.baseURI);
            this.agregarFraseFinal();
         }
      },

      eventoKeyPressModificador() {
         console.log('Presiono enter');
         console.log('Evento keypress');
         this.agregarFraseFinal();
     }
   },


   data() {
      return {
         listafrases: frases,
         frase: null,
         //autor: 'sin autor'
         autor: null
      }
   }
})

app.mount('#myApp')
