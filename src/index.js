export default {

    props: {
        width: '0',
        background: '#111',
        colorlink: '#818181',
        colorlinkhover: '#f1f1f1',
        sideposition: 'left',
        zindex: 1000,
        backdropBackground: 'rgba(0,0,0,0.6)',
        closeafterclick: false
    },

    $backdropElement: null,

    template(h) {
        return h`
            <style>   
                :component {
                    height: 100%;
                    width: ${this.props.width};
                    position: fixed;
                    z-index: ${this.props.zindex};
                    top: 0;
                    ${this.props.sideposition === 'left' ? 'left: 0' : 'right: 0'};
                    background: ${this.props.background}!important;
                    overflow-x: hidden;
                    transition: 0.5s;
                    padding-top: 60px;
                }
                
                :component a {
                    padding: 8px;
                    text-decoration: none;
                    font-size: 25px;
                    color: ${this.props.colorlink}!important;
                    display: block;
                    transition: 0.3s;
                }
                
                :component a:hover {
                    color: ${this.props.colorlinkhover}!important;
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
                  :component {padding-top: 15px;}
                  :component a {font-size: 18px;}
                }
            </style>
            
            <div class="tools">
                <a class="closebtn" onclick="this.close()">&times;</a>
            </div>
        `
    },

    onMount() {
        if (!this.listenerOnComponent) {
            this.listenerOnComponent = () => this.rootClick();
            this.getHTMLElement().addEventListener('click', this.listenerOnComponent);
        }
    },

    rootClick() {
        if (this.props.closeafterclick) {
            this.close();
        }
    },

    createBackdrop() {
        this.$backdropElement = document.createElement('div');
        this.$backdropElement.style.cssText = `
            background: ${this.props.backdropBackground}; 
            z-index: ${this.props.zindex - 1};
            position: fixed; 
            top: 0; 
            left: 0; 
            width: 100%; 
            height: 100%; 
        `;
        this.$backdropElement.addEventListener('click', () => this.close());
        document.body.appendChild(this.$backdropElement);
    },

    destroyBackdrop() {
        if (this.$backdropElement) {
            document.body.removeChild(this.$backdropElement);
            this.$backdropElement = null;
        }
    },

    open() {
        this.props.width = '250px';
        this.createBackdrop();
    },

    close() {
        this.props.width = '0';
        this.destroyBackdrop();
    },

    isOpen() {
        return this.props.width !== '0';
    }

};