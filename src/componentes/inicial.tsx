import { Component } from "react";
import ThreeScene from "./threeScene";

type props = {
    tema: string
}

const App = () => {
    return (
        <>
            <div>
                <h1>Minha Página 3D</h1>
                <ThreeScene />
            </div>
        </>
    );
}

export default class PaginaInicial extends Component<props> {

    render() {
        return (
            <div className="centered">
                <header>
                    <App />
                </header>
            </div>
        )
    }
}