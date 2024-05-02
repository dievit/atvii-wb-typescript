import { Component } from "react";

type props = {
    tema: string
}

export default class PaginaInicial extends Component<props> {

    render() {
        const { tema } = this.props;
        return (
            <div>
                <header>
                    <h1>Bem-vindo à World Beauty</h1>
                </header>
                <main>
                    
                </main>
            </div>
        )
    }
}