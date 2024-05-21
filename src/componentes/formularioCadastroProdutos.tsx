import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type props = {
    tema: string
    seletorView: (tela:string, evento?: React.MouseEvent) => void

}

export default class FormularioCadastroProduto extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
            const elems = document.querySelectorAll('select');
            M.FormSelect.init(elems);
        }, 0);
    }
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Categoria</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nomeSocial" type="text" className="validate" />
                            <label htmlFor="nomeSocial">Preço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">Custo</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">person_add</i>
                            </button>                            
                        </div>
                        <div className="col s12">
                            <button className={estiloBotao} type="button" onClick={(e) => this.props.seletorView('Produtos', e)}>Voltar
                                <i className="material-icons right">person_add</i>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}