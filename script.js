var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'Usted cargó esta página el ' + new Date().toLocaleString()
  }
})

// Loop (v-if)
var api = new Vue({
      el: '#apex',
      data: {
        isHidden: false
      }
    })


var api1 = new Vue({
      el: '#apex1',
      data: {
        isHidden: false
      }
    })

var api2 = new Vue({
      el: '#apex2',
      data: {
        isHidden: false
      }
    })

var api3 = new Vue({
      el: '#apex3',
      data: {
        isHidden: false
      }
    })

var api4 = new Vue({
      el: '#apex4',
      data: {
        isHidden: false
      }
    })


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Aprender JavaScript' },
      { text: 'Aprender Vue' },
      { text: 'Construir algo increíble' }
    ]
  }
})

// Loop (v-for)
var Datos=new Vue({
  el: '#Juegos',
  data: {
    object: {
      title: 'Paladins',
      author: 'Mario Bros',
      publishedAt: 'Juegos Retro'
    }
  }
})

var Paquetes=new Vue({
  el: '#p',
  data: {
    object: {
      a: 'Individual (1)',
      b: 'Doble(2)',
      c: 'Triple(3)',
			d: 'Cuadruple(4)',
      e: 'familiar(5-9)',
      f: 'Fiesta(50-130)',
		  g: 'Mascotas mayores a 11kg cuentan como acompañante. ',
			h: 'No se incluyen bebidas alcoholicas en el paquete.'

    }
  }
})

//Input  (v-on:click)
var Instrumentos= new Vue({
  el: '#Instrum',
  methods: {
    di: function (mensaje) {
      alert(mensaje)
    }
  }
})

//User Input (v-model)

var Idioma=new Vue({
  el: '#Idioma',
  data: {
    selected: 'Seleccióna unn Idioma',
    options: [
			{ text: 'Español', value: 'Bienvenido al peor sitio de turismo'},
			{text: 'English', value: 'Welcome to the worst turism website' },
      {text: 'Francais', value: 'bienvenue sur le pire site de truisme' }
    ]
  }
})

var paquetes=new Vue({
  el: '#paquetes',
  data: {
    selected: 'Selecciona tu paquete',
    options: [{ text: 'Solo', value: '4000'
			} ,
			{ text: 'Doble', value: '$7,500 mx' },
      { text: 'Triple', value: '$11,000 mx'  },
			{ text: 'Cuatruple', value: '$11,000 mx'  },
			{ text: 'Cuatruple', value: '$15,000 mx'  },
			{ text: 'Familiar', value: '$18,000 mx'  },
			{ text: 'Fiesta', value: '$110,000 mx'  }
    ]
  }
})

var iVegeta = new Vue({
el: '#iVegeta',
data:	{
vegeta: 'https://i.quotev.com/img/q/u/15/6/11/cad6aeaf90-imag.jpg'
}});

var Lugares=new Vue({
  el: '#lugar',
  data: {
    selected: 'Selecciónan',
    options: [{ text: 'Musica', value: 'Luis Miguel' ,imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'  
			} ,{ text: 'Noticias', value: 'TldrNews, Philip DeFranco',imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'   },
      { text: 'Politica', value: 'TldrNews',imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'   },
			{ text: 'Reseñas', value: 'Caja de Peliculas, Dayoscript, LevelUp',imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'   },
			{ text: 'Tech', value: 'Linus, NateGentile' ,imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'   },
			{ text: 'Cocina', value: 'Adam Raguesa', imag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/DelValleCity.jpg/450px-DelValleCity.jpg'   }
    ]
  }
})
