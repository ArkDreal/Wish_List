import React from 'react';

export default class DesejosEUsuarios extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            listaTiposDesejos : [],
            listaUsuarios : [],
            titulo : '',
            descricao : '',
            email : '',
            senha : ''
        };
    }

    cadastrarTipoDesejo(desejo){
        
        desejo.preventDefault()

        fetch('http://localhost:5000/api/TiposDesejos', {

            method: 'POST',
            body: JSON.stringify({
                tituloTipoDesejo : this.state.titulo,
                descricaoTipoDesejo : this.state.descricao 
            }),
            headers: { "Content-Type" : "application/json"}
        })

        .then(console.log("Tipo desejo cadastro."))

        .catch(error => console.log(error))
    }
    
    cadastrarUsuario(usuario){
        usuario.preventDefault()

        fetch('http://localhost:5000/api/Usuario', {

            method: 'POST',
            body: JSON.stringify({
                nomeUsuario : this.state.titulo,
                email : this.state.descricao,
                senha : this.state.senha 
            }),
            headers: { "Content-Type" : "application/json"}
        })

        .then(console.log("Usuario cadastro."))

        .catch(error => console.log(error))

    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        <h2>Lista de tipos de desejos</h2>
                        <table>
                            
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

                                <input type = "text"
                                value = {this.titulo}
                                placeholder = "Descrição"
                                onChange = {this.atualizaStateDesejo} />

                                <button type = "submit"> Cadastrar </button>
                            </div>

                        </form>
                    </section>

                    <section>
                        <h2>Lista de usuarios</h2>
                        <table>

                        </table>
                    </section>
                    <section>
                        <h2>Crie um usuario</h2>
                        <form onSubmit = {this.cadastrarUsuario}>
                            <div>
                                <input type = "text"
                                value = {this.titulo}
                                placeholder = "nome"
                                onChange = {this.atualizaStateUsuario}/>

                                <input type = "email"
                                value = {this.titulo}
                                placeholder = "senha"
                                onChange = {this.atualizaStateUsuario}/>

                                <input type = "text"
                                value = {this.titulo}
                                placeholder = "senha"
                                onChange = {this.atualizaStateUsuario}/>

                                <button type = "submit"> Cadastrar </button>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        )
    }
}
