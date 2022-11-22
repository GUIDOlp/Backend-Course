// importamos modulo fs para la utilizacion de archivos
const fs = require('fs');
const productos= [];


class Contenedor {
    constructor(nombreArchivo) {
        this.nombreArchivo= nombreArchivo;
    }
    // impementamos los metodos
    save = async objeto => {
		const obj = await this.getAll();
		try {
			let id;
			obj.length === 0
				? (id = 1)
				: (id = obj[obj.length - 1].id + 1);
			const newObj = { ...objeto, id: id };
			obj.push(newObj);
			await this.writeFile(obj);
			return newObj.id;
		} catch (error) {
			console.log(error);
		}
	};
    getById = async id => {
		const objs = await this.getAll();
		try {
			const obj = objs.find(obj => obj.id === id);
			return obj ? obj : null;
		} catch (error) {
			console.log(error);
		}
	};
    getAll = async () => {
		try {
			const objs = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
			return JSON.parse(objs);
		} catch {
			if (error) {
				console.log(error)
			}
			else {
				 productos.push= [{
					titulo: title,
					precio: price,
					url: thumbnail
				}]
			}
			fs.writeFile('productos.txt', JSON.stringify(productos, null, 2), error => {
				if(error) {
					console.log(error)
				} else {
					console.log("producto agregado con exito")
				}
			})
		}
	};
    deleteById = async id => {
		let objs = await this.getAll();
		try {
			objs = objs.filter(obj => obj.id != id);
			await this.writeFile(objs);
		} catch (error) {
			console.log(error);
		}
	};
    deleteAll = async () => await this.writeFile([]);
    writeFile = async data => {
		try {
			await fs.promises.writeFile(
				this.nombreArchivo,
				JSON.stringify(data, null, 2)
			);
		} catch (error) {
			console.log(error);
		}
	};
}

module.exports= Contenedor; 