import { Component } from "react";
import backgroundImage from "../images/wb_background.png"

type props = {
    tema: string
}

const App = () => {
    return (
        <>
        </>
    );
}

export default class PaginaInicial extends Component<props> {

    render() {
        return (
            <div className="centered" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <header>
                    <App />
                </header>
            </div>
        )
    }
}