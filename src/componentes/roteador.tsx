import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import TerminalDeVendas from "./formularioVenda";
import PaginaInicial from "./inicial";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        const telaSalva = localStorage.getItem("telaAtual");
        this.state = {
            tela: telaSalva || "Home"
        };
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        });
        localStorage.setItem("telaAtual", novaTela);
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="cyan darken-1" botoes={['Home','Clientes', 'Cadastrar', 'Produtos', 'Vendas']} />
        if (this.state.tela === 'Home') {
            return (
                <>
                    {barraNavegacao}
                    <PaginaInicial tema="cyan darken-1" />
                </>
            )
        } else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="cyan darken-1" />
                </>
            )
        } else if (this.state.tela === 'Cadastrar') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="cyan darken-1" />
                </>
            )
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="cyan darken-1" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <TerminalDeVendas tema ="cyan darken-1" />
                </>
            )
        }
    }
}