import {Component} from "doz";

export default class extends Component{

    constructor(o) {
        super(o);

        this. props = {
            width: '0',
            background: 'linear-gradient(128deg, #56CCF2, #2F80ED)',
            colorlink: '#f1f1f1',
            colorlinkhover: '#818181'
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
                  padding: 8px 8px 8px 32px;
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
                }
                
                @media screen and (max-height: 450px) {
                  .sidenav {padding-top: 15px;}
                  .sidenav a {font-size: 18px;}
                }
            </style>
            
            <div d-ref="nav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="this.closeNav()">&times;</a>
            </div>
            
        `
    }

    openNav() {
        this.props.width = '250px';
    }

    closeNav() {
        this.props.width = '0';
    }

    onCreate() {

    }

    onMount() {
        this.getHTMLElement().querySelectorAll('[data-link]').forEach(node => {
            this.ref.nav.appendChild(node)
        });
    }

    onUpdate() {

    }

    onDestroy() {

    }

};