class Footer extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    render(){
        this.innerHTML = `
        <style>
            .footer {
                padding:20px 10px;
                background-color: #000;
            }

            .footer p {
                color: #fff;
            }
        </style>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
        <footer class="footer">
        <p>Copyright © 2020 Laily Rachmah  -  Dicoding MLFE Student.</p>
            <div class="col-lg-2 col-md-2 col-12">
            </div>
        </footer>
        `;
    }
}
customElements.define('footer-section', Footer);