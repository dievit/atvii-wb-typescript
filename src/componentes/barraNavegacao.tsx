/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../styles/custom-style.css'

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
        const elemsDropdown = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elemsDropdown);
        
        const elemsSidenav = document.querySelectorAll('.sidenav');
        // Inicialize o dropdown
        M.Dropdown.init(elemsSidenav)
        }, 0);
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
            <div className="navbar-fixed">
                <nav className={estilo}>
                    <div className="nav-wrapper">
                        <a href="#!" className="brand-logo">WorldBeauty</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {/* Dropdown Trigger */}
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><strong>Produto</strong><i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdonw2"><strong>Cliente</strong><i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a className="dropdown-trigger" href="#!" data-target="dropdonw2"><strong>Terminal</strong></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

                {/* Dropdown Content */}
                <ul id="dropdown1" className="dropdown-content">
                    {this.gerarListaBotoes()}
                </ul>

            </>
        );
    }
}
