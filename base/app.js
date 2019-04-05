const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar', {
                        base: {
                            demand: true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()                
                    .argv;


const { crearArchivo } = require('../multiplicar/multiplicar')

console.log(`Base ${argv.base}`)
console.log(`Limite ${argv.limite}`);
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`))
    .catch(err => console.log(err))*/