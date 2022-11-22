const Contenedor = require('./Contenedor.js');
const fs= require('fs')

const productos= new Contenedor('productos.txt')

const test = async () => {
	const save = await productos.save({
		title: 'Coca Cola',
		price: "$700",
		thumbnail: 'https://http2.mlstatic.com/D_NQ_NP_754207-MLA47009826309_082021-O.webp'
	});
	console.log({ save });
	const getall = await productos.getAll();
	console.log({ getall });		
	const getbyid = await productos.getById();
	console.log({ getbyid });
	const deletebyid = await productos.deleteById();
	console.log({ deletebyid });
	const deleteall = await productos.deleteAll();
	console.log({ deleteall });
};

test();

// implementamos funcion para leer nuestros productos
async function read() {
	try {
	await fs.promises.readFile('./productos.txt', 'utf-8')
	console.log("producto agregado")
	}
	catch (error) {
       console.log("error de lectura", error)
	}  
}
read();