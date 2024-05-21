import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../styles/custom-style.css'

type props = {
    tema: string,
    botoes: {titulo: string}[],
    seletorView: (titulo: string, evento?: React.MouseEvent) => void
}

export default class BarraNavegacao extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
            const elemsSidenav = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elemsSidenav);
        }, 0);
    }

    render() {
        let estilo = `${this.props.tema}`;
        return (
            <>
                <div className="navbar-fixed">
                    <nav className={estilo}>
                        <div className="nav-wrapper">
                            <a className="brand-logo">WorldBeauty</a>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                {/* Botões para as páginas */}
                                {this.props.botoes.map((botao: any) => (
                                    <li key={botao.titulo}>
                                        <a onClick={(e) => this.props.seletorView(botao.titulo, e)}>{botao.titulo}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>

                {/* Sidenav para dispositivos móveis */}
                <ul className="sidenav" id="mobile-demo">
                    {this.props.botoes.map((botao: any) => (
                        <li key={botao.titulo}>
                            <a onClick={(e) => this.props.seletorView(botao.titulo, e)}>{botao.titulo}</a>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
