import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';


type props = {
    tema: string
}

export default class ListaProdutos extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
            const elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 0);
    }
    render() {

        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`

        return (
        <>    
            <div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto 1</strong></div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID: </strong>1 <br />
                                        <strong>Nome: </strong>Produto1 <br />
                                        <strong>Categoria: </strong>Teste <br />
                                        <strong>Preço: R$</strong>150,00 <br />
                                        <strong>Custo: R$</strong>70,00 <br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className={estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto 2</strong></div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID: </strong>2 <br />
                                        <strong>Nome: </strong>Produto2 <br />
                                        <strong>Categoria: </strong>Teste <br />
                                        <strong>Preço: R$</strong>80,00 <br />
                                        <strong>Custo: R$</strong>30,00 <br />
                                    </span>
                                </div>                                    <div className="col s6">
                                      <button className={estiloBotao}onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto 3</strong></div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID: </strong>3 <br />
                                        <strong>Nome: </strong>Produto4 <br />
                                        <strong>Categoria: </strong>Teste <br />
                                        <strong>Preço: R$</strong>50,00 <br />
                                        <strong>Custo: R$</strong>20,00 <br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className={estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto 4</strong></div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID: </strong>4 <br />
                                        <strong>Nome: </strong>Produto4 <br />
                                        <strong>Categoria: </strong>Teste <br />
                                        <strong>Preço: R$ </strong>30,00 <br />
                                        <strong>Custo: R$ </strong>10,00 <br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className={estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i><strong>Produto 5</strong></div>
                        <div className="collapsible-body">
                            <div className="row">
                                <div className="col s6">
                                    <span>
                                        <strong>ID: </strong>5 <br />
                                        <strong>Nome: </strong>Produto5 <br />
                                        <strong>Categoria: </strong>Teste <br />
                                        <strong>Preço: R$</strong>20,00 <br />
                                        <strong>Custo: R$</strong>5,00 <br />
                                    </span>
                                </div>
                                <div className="col s6">
                                    <button className={estiloBotao} onClick={() => console.log(`Botão dentro do collapsible`)}>Editar
                                        <i className="material-icons right">create</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
        );
    }
}