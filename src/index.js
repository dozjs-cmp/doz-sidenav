export default {

    props: {
        width: '0',
        background: '#111',
        colorlink: '#818181',
        colorlinkhover: '#f1f1f1'
    },

    template(h) {
        return h`

            <style>   
                :root {
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
                
                :root a {
                  padding: 8px 8px 8px 0;
                  text-decoration: none;
                  font-size: 25px;
                  color: ${this.props.colorlink};
                  display: block;
                  transition: 0.3s;
                }
                
                :root a:hover {
                  color: ${this.props.colorlinkhover};
                }
                
                .tools .closebtn {
                  position: absolute;
                  top: 0;
                  right: 25px;
                  font-size: 36px;
                  margin-left: 50px;
                  cursor: pointer;
                }
                
                @media screen and (max-height: 450px) {
                  :root {padding-top: 15px;}
                  :root a {font-size: 18px;}
                }
            </style>
            
            <div class="tools">
                <a class="closebtn" onclick="this.close()">&times;</a>
            </div>
        `
    },

    open() {
        this.props.width = '250px';
    },

    close() {
        this.props.width = '0';
    },

    isOpen() {
        return this.props.width !== '0';
    }

};