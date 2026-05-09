//capturando a div
const cabecalho = document.getElementById("cabecalho")

cabecalho.innerHTML = `
        
    <header class="main-header">
        <div class="container flex-nav">
            <div class="logo">
                <img src="./imagens/logo.jpg">
                <svg viewBox="0 0 200 200">
                    <defs>
                        <path id="top-circle" d="M 25 100 A 70 70 0 0 1 170 100" />
                        <path id="bottom-circle" d="M 25 80 A 70 70 0 0 0 170 80" />
                    </defs>
                    <text text-anchor="middle">
                        <textPath href="#top-circle" startOffset="50%">Destino</textPath>
                    </text>
                    <text text-anchor="middle">
                        <textPath href="#bottom-circle" startOffset="50%">Sustentável</textPath>
                    </text>
                </svg>
            </div>
                <nav>
                    <ul class="nav-links">
                        <li><a href="./index.html">Início</a></li>
                        <li><a href="./index.html#dicas">Dicas</a></li>
                        <li><a href="./index.html#destinos">Destinos</a></li>
                        <li><a href="./index.html#contato">Contato</a></li>
                    </ul>
                </nav>
        </div>
    </header>
`
const footer = document.getElementById("footer")

footer.innerHTML = `
    <footer class="main-footer">
        <div class="container footer-content">
            <p>&copy; 2026 Destino Sustentável Inc. Todos os direitos reservados.</p>
            <div class="social-links">
                <a href="#">Instagram</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>
    </footer>
`

const hibrido = document.getElementById("hibrido")

hibrido.innerHTML = `
    <aside class="sidebar">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </aside>

          <main class="principal">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime autem ipsa, doloribus repellendus eligendi odio corrupti incidunt quo necessitatibus quae! Voluptatem commodi temporibus quos dolorum culpa nesciunt facilis nobis facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, et eum perspiciatis in hic consectetur quaerat iste quod rem quae quis odit placeat nisi vel? Repellendus voluptas necessitatibus provident nam.</p>
          </main>
`
