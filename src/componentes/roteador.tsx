import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import ListaProdutos from "./listaProdutos";
import TerminalDeVendas from "./formularioVenda";
import PaginaInicial from "./inicial";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProdutos";

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

    selecionarView(novaTela: string, evento?: React.MouseEvent) {
       if(evento) evento.preventDefault();
        console.log(novaTela);
        this.setState({
            tela: novaTela
        });
        localStorage.setItem("telaAtual", novaTela);
    }
    

    render() {
        return (
            <>
                <BarraNavegacao seletorView={this.selecionarView} tema="cyan darken-1" botoes={[
                    { titulo: "Home" },
                    { titulo: "Clientes" },
                    { titulo: "Produtos" },
                    { titulo: "Terminal de Vendas" }
                ]} />
                {this.state.tela === 'Home' && <PaginaInicial tema="cyan darken-1" />}
                {this.state.tela === 'Clientes' && <ListaCliente tema="cyan darken-1" seletorView={this.selecionarView} />}
                {this.state.tela === 'Cadastrar Cliente' && <FormularioCadastroCliente tema="cyan darken-1" seletorView={this.selecionarView} />}
                {this.state.tela === 'Produtos' && <ListaProdutos tema="cyan darken-1" seletorView={this.selecionarView} />}
                {this.state.tela === 'Cadastrar Produto' && <FormularioCadastroProduto tema="cyan darken-1" seletorView={this.selecionarView} />}
                {this.state.tela === 'Terminal de Vendas' && <TerminalDeVendas tema="cyan darken-1" />}
            </>
        );
    }
}