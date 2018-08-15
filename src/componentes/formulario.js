import React, {Component} from 'react';

class Formulario extends Component {

	categoria = React.createRef();

	cambiarCategoria = (e) => {
		e.preventDefault();
		this.props.consultarNoticias(this.categoria.current.value)
	}

	render() {
		return(
			<div className="buscador row">
				<div className="col s12 m8 offset-m2">
					<form onSubmit={this.cambiarCategoria}>
						<h2>Noticias por categoría</h2>
						<div className="input-field col s12 m8">
							<select ref={this.categoria}>
								<option value="general" defaultValue>General</option>
								<option value="business">Negocios</option>
								<option value="health">Salud</option>
								<option value="science">Ciencia</option>
								<option value="sports">Deportes</option>
								<option value="technology">Tecnología</option>
							</select>
						</div>
						<div className="input-field col s12 m4 enviar">
							<input type="submit" className="btn amber darken-2" value="Buscar" />
						</div>
					</form>
				</div>
			</div>
		)
	}

}






export default Formulario;
