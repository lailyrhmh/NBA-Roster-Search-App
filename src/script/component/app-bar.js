class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .app-bar {
                padding: 5px 20px;
                width: 100%;
                background-color: #000;
                color: white;
                /* box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2); */
            }
        
            .app-bar .logo {
              margin-top: 3px;
              padding-left: 20px;
            }

            .app-bar h2 {
              margin-bottom: 0;
              text-align: center;
            }
        </style>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
        <div id="app-bar" class="app-bar">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-12">
                    <div class="logo">
                        <a href="index.html"><img src="https://cdn.nba.com/logos/leagues/logo-nba.svg" alt="logo"></a>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 col-12">
                    <h2>ROSTERS</h2>
                </div>
            </div>
        </div>
        `;
    }
}
  
customElements.define('app-bar', AppBar);  