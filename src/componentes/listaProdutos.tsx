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
        return (
        <>    
            <div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 1 <br />
                                Nome: Produto1 <br />
                                Categoria: Teste <br />
                                Preço: R$ 150,00 <br />
                                Custo: R$ 70,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 2</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 2 <br />
                                Nome: Produto2 <br />
                                Categoria: Teste <br />
                                Preço: R$ 80,00 <br />
                                Custo: R$ 30,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 3</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 3 <br />
                                Nome: Produto4 <br />
                                Categoria: Teste <br />
                                Preço: R$ 50,00 <br />
                                Custo: R$ 20,00 <br />
                            </span>
                            </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 4</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 4 <br />
                                Nome: Produto4 <br />
                                Categoria: Teste <br />
                                Preço: R$ 30,00 <br />
                                Custo: R$ 10,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 5</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 5 <br />
                                Nome: Produto5 <br />
                                Categoria: Teste <br />
                                Preço: R$ 20,00 <br />
                                Custo: R$ 5,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 6</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 6 <br />
                                Nome: Produto6 <br />
                                Categoria: Teste <br />
                                Preço: R$ 10,00 <br />
                                Custo: R$ 3,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 7</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 7 <br />
                                Nome: Produto7 <br />
                                Categoria: Teste <br />
                                Preço: R$ 5,00 <br />
                                Custo: R$ 2,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 8</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 8 <br />
                                Nome: Produto8 <br />
                                Categoria: Teste <br />
                                Preço: R$ 2,00 <br />
                                Custo: R$ 1,00 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 9</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 9 <br />
                                Nome: Produto9 <br />
                                Categoria: Teste <br />
                                Preço: R$ 1,00 <br />
                                Custo: R$ 0,50 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 10</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 10 <br />
                                Nome: Produto10 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,50 <br />
                                Custo: R$ 0,25 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 11</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 11 <br />
                                Nome: Produto11 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,25 <br />
                                Custo: R$ 0,10 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 12</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 12 <br />
                                Nome: Produto12 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,10 <br />
                                Custo: R$ 0,05 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 13</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 13 <br />
                                Nome: Produto13 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,05 <br />
                                Custo: R$ 0,02 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 14</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 14 <br />
                                Nome: Produto14 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,02 <br />
                                Custo: R$ 0,01 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 15</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 15 <br />
                                Nome: Produto15 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,01 <br />
                                Custo: R$ 0,005 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 16</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 16 <br />
                                Nome: Produto16 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,005 <br />
                                Custo: R$ 0,002 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 17</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 17 <br />
                                Nome: Produto17 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,002 <br />
                                Custo: R$ 0,001 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 18</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 18 <br />
                                Nome: Produto18 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,001 <br />
                                Custo: R$ 0,0005 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 19</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 19 <br />
                                Nome: Produto19 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,0005 <br />
                                Custo: R$ 0,0002 <br />
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 20</div>
                        <div className="collapsible-body">
                            <span>
                                ID: 20 <br />
                                Nome: Produto20 <br />
                                Categoria: Teste <br />
                                Preço: R$ 0,0002 <br />
                                Custo: R$ 0,0001 <br />
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </>
        );
    }
}