import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this. props = {
            width: '0',
            background: '#111',
            colorlink: '#818181',
            colorlinkhover: '#f1f1f1'
        }
    }

    template(h) {
        return h`

            <style>   
                .sidenav {
                  height: 100%;
                  width: ${this.props.width};
                  position: fixed;
                  z-index: 1;
                  top: 0;
                  left: 0;
                  background: ${this.props.background};
                  overflow-x: hidden;
                  transition: 0.5s;
                  padding-top: 60px;
                }
                
                .sidenav a {
                  padding: 8px 8px 8px 0px;
                  text-decoration: none;
                  font-size: 25px;
                  color: ${this.props.colorlink};
                  display: block;
                  transition: 0.3s;
                }
                
                .sidenav a:hover {
                  color: ${this.props.colorlinkhover};
                }
                
                .sidenav .closebtn {
                  position: absolute;
                  top: 0;
                  right: 25px;
                  font-size: 36px;
                  margin-left: 50px;
                  cursor: pointer;
                }
                
                @media screen and (max-height: 450px) {
                  .sidenav {padding-top: 15px;}
                  .sidenav a {font-size: 18px;}
                }
            </style>
            
            <div d-ref="nav" class="sidenav">
                <a class="closebtn" onclick="this.close()">&times;</a>
            </div>
        `
    }

    open() {
        this.props.width = '250px';
    }

    close() {
        this.props.width = '0';
    }

    isOpen() {
        return this.props.width !== '0';
    }

    onMount() {
        const nodeList = this.getHTMLElement().children;

        // Remove from DOM
        const rootNode = this.getHTMLElement().removeChild(nodeList[0]);

        while (this.getHTMLElement().hasChildNodes()) {
            // Destination node
            this.ref.nav.appendChild(this.getHTMLElement().childNodes[0]);
        }

        // Re-append to the DOM
        this.getHTMLElement().appendChild(rootNode);
    }


};