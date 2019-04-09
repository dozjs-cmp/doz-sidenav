# doz-sidenav
A simple side navigation menu for doz

## Install
```
npm install doz-sidenav
```

Live <a href="https://dozjs-cmp.github.io/doz-sidenav/dist/">here</a>


## Usage

Globally
```javascript
import Doz from 'doz'
new Doz({
        root: '#app',

        template(h) {
            return h`
                <doz-sidenav d:id="sidenav">
                    <a data-link href="#">About</a>
                    <a data-link href="#">Services</a>
                    <a data-link href="#">Clients</a>
                    <a data-link href="#">Contact</a>
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
|background| |CSS background color|
|colorlink| |CSS text color for a item|
|colorlinkhover| |CSS text color for a:hover item|


## Method
| Name | Args | Description |
| ---- | ------- | ----------- |
|openNav()| |The method to open the sidemenu|
|closeNav()| |The method to close the sidemenu|


## Changelog
You can view the changelog <a target="_blank" href="https://github.com/dozjs-cmp/doz-sidenav/blob/master/CHANGELOG.md">here</a>

## License
doz-sidenav is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
Pietro Lembo