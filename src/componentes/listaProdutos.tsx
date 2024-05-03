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
            <div>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
                <ul className="collapsible">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">crop_7_5</i>Produto 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>
            </div>

            
        )
    }
}