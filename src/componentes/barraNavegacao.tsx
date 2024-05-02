/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    componentDidMount() {
        // Inicialize o dropdown
        const elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            return this.props.botoes.map(valor =>
                <li key={valor}><a onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a></li>
            );
        }
    }

    render() {
        let estilo = `${this.props.tema}`;
        return (
            <>
                <nav className={estilo}>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">WorldBeauty</a>
                        <ul className="right hide-on-med-and-down">
                            {/* Dropdown Trigger */}
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
                        </ul>
                    </div>
                </nav>

                {/* Dropdown Content */}
                <ul id="dropdown1" className="dropdown-content">
                    {this.gerarListaBotoes()}
                </ul>
            </>
        );
    }
}
