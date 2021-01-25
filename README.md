# doz-sidenav
A simple side navigation menu for doz.

This component is a porting from Side Navigation Menu example of W3Schools.
https://www.w3schools.com/howto/howto_js_sidenav.asp

## Install
```
npm install doz-sidenav
```

Live <a href="https://dozjs-cmp.github.io/doz-sidenav/dist/index.html">here</a>


## Usage

Globally
```javascript
import Doz from 'doz'
new Doz({
        root: '#app',

        template(h) {
            return h`
                <doz-sidenav d:id="sidenav">
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </doz-sidenav>
                <h2>Animated Sidenav Example</h2>
                <p>Click on the element below to open the side navigation menu.</p>
                <div style="font-size:30px;cursor:pointer;" onclick="this.getComponentById('sidenav').openNav()"><i class="fas fa-bars"></i> Open</div>

            `
        }
    });

```

## Props
| Name | Default | Description |
| ---- | ------- | ----------- |
|background|#111|CSS background color|
|backdropBackground|rgba(0,0,0,0.6)|CSS background color of the backdrop|
|colorlink|#818181|CSS text color for a item|
|colorlinkhover|#f1f1f1|CSS text color for a:hover item|
|sideposition|left|left or right|
|zindex|1000|CSS z-index|


## Method
| Name | Args | Description |
| ---- | ------- | ----------- |
|open()| |The method to open the sidemenu|
|close()| |The method to close the sidemenu|
|isOpen()| |The method returns true or false|


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-sidenav/blob/master/CHANGELOG.md">here</a>

## License
doz-sidenav is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
Pietro Lembo