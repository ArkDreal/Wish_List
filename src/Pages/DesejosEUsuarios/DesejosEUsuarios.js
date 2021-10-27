import React from 'react';

export default class DesejosEUsuarios extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            listaTiposDesejos : [],
            titulo : ''
        };
    }

    cadastrarTipoDesejo(desejo){
        
        desejo.preventDefault()

        fetch('http://localhost:5000/api/TiposDesejos', {

            method: 'POST',
            body: JSON.stringify({
                tituloTipoDesejo : this.state.titulo,
            }),
            headers: { "Content-Type" : "application/json"}
        })

        .then(console.log("Tipo desejo cadastro."))

        .catch(error => console.log(error))
    }

    atualizaStateDesejo = async (desejo) => {
        await this.setState({titulo : desejo.target.value})
        console.log(this.state.titulo)
    }

    buscarTipoDesejo = () => {
        fetch('http://localhost:5000/api/TipoDesejo')
        
        .then( resposta => resposta.json())

        .then( dados => this.setState({listaTiposDesejos : dados}))

        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.buscarTipoDesejo()
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Lista de tipos de desejos</h2>
                        <table>
                            <thead>
                                <tr>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.listaTiposDesejos.map((tipoDesejo) => {
                                        return(
                                            <tr key>
                                                <td></td>
                                                <td></td>
                                            <tr/>
                                        )
                                    )}
                                }
                            </tbody>
                        </table>
                    </section>
                    
                    <section>
                        <h2>Cadastre um tipo de desejo</h2>
                        <form onSubmit = {this.cadastrarTipoDesejo}>
                            <div>
                                <input type = "text"
                                value = {this.titulo}
                                placeholder = "Nome do desejo"
                                onChange = {this.atualizaStateDesejo} />

                                <button type = "submit"> Cadastrar </button>
                            </div>

                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
