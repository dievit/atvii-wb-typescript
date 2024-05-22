/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type props = {
    tema: string
    seletorView: (tela:string, evento?: React.MouseEvent) => void
}

export default class ListaCliente extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
            const elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 0);    
    }    

    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        let estiloBotao2 = `  ${this.props.tema}`
        return (
            <div>
                <div className="center">
                    <h3>Clientes</h3>
                </div>
                <ul className='collapsible'>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 1</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> 1<br />
                                        <strong>Nome:</strong> Ana Souza<br />
                                        <strong>CPF:</strong> 111.222.333-44<br />
                                        <strong>Telefone:</strong> (11) 99999-1111<br />
                                        <strong>Gênero:</strong> F<br />
                                        <strong>Data de Cadastro:</strong> 2024-05-06<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className= {estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        < i className= "material-icons right">create</i>
                                    </button>
                                </div>                                
                            </div>    
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 2</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> 2<br />
                                        <strong>Nome:</strong> Carlos Oliveira<br />
                                        <strong>CPF:</strong> 222.333.444-55<br />
                                        <strong>Telefone:</strong> (22) 88888-2222<br />
                                        <strong>Gênero:</strong> M<br />
                                        <strong>Data de Cadastro:</strong> 2024-05-06<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className= {estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        < i className= "material-icons right">create</i>
                                    </button>
                                </div>                                
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 3</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> 3<br />
                                        <strong>Nome:</strong> Amanda Silva<br />
                                        <strong>CPF:</strong> 333.444.555-66<br />
                                        <strong>Telefone:</strong> (33) 77777-3333<br />
                                        <strong>Gênero:</strong> F<br />
                                        <strong>Data de Cadastro:</strong> 2024-05-06<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className= {estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        < i className= "material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 4</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> 4<br />
                                        <strong>Nome:</strong> João Santos<br />
                                        <strong>CPF:</strong> 444.555.666-77<br />
                                        <strong>Telefone:</strong> (44) 66666-4444<br />
                                        <strong>Gênero:</strong> M<br />
                                        <strong>Data de Cadastro:</strong> 2024-05-06<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className= {estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        < i className= "material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 5</div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID:</strong> 5<br />
                                        <strong>Nome:</strong> Maria Costa<br />
                                        <strong>CPF:</strong> 555.666.777-88<br />
                                        <strong>Telefone:</strong> (55) 55555-5555<br />
                                        <strong>Gênero:</strong> F<br />
                                        <strong>Data de Cadastro:</strong> 2024-05-06<br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className= {estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        < i className= "material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>                    
                </ul>
                <div>
                <button className="btn-floating btn-large waves-effect waves-light cyan darken-1" onClick={(e) => this.props.seletorView('Cadastrar Cliente', e)}>
                    <i className="material-icons right mt-8">person_add</i>
                </button>
                </div>
            </div>
        )
    }
}