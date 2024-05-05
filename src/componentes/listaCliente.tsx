/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    componentDidMount() {
        setTimeout(() => {
            const elems = document.querySelectorAll('.collapsible');
            M.Collapsible.init(elems);
        }, 0);
    }

    render() {
        return (
            <div>
                <ul className='collapsible'>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 1</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 2</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 3</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 4</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 5</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 6</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 7</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 8</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 9</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 10</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 11</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>                    
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 12</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 13</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 14</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 15</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 16</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 17</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 18</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 19</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 20</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 21</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 22</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 23</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 24</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 25</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 26</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 27</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 28</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 29</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Cliente 30</div>
                        <div className="collapsible-body"><span>infos do cliente dois</span></div>
                    </li>
                </ul>
            </div>
        )
    }
}