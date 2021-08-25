const fs = require('fs');
const path = require('path');

const pathHTML = path.resolve(__dirname ,'..', 'template.html')

class createHTML {

    createRow = (data) => `
        <tr>
            <td>${data.subfuncao}</td>
            <td>${data.programa}</td>
            <td>${data.acao}</td>
            <td>${data.empenhado}</td>
            <td>${data.pago}</td>
            <td>${data.liquidado}</td>
        </tr>

    `;

    createTable = (rows) => `
        <table>
        <tr>
            <th>Subfunção</th>
            <th>Programa</th>
            <th>Ação</th>
            <th>Empenhado</th>
            <th>Pago</th>
            <th>Liquidado</th>
        </tr>
        ${rows}
        </table>
    `;

    createHtml = (table) => `
        <html>
            <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
                body {
                font-family: 'Roboto', sans-serif;
                }



                .title {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 50px;
                }

                tr {
                    text-align: center;
                    border: 1px solid black;
                }
                th {
                    text-transform: uppercase;
                }
                th, td {
                    padding: 10px;
                }

                tr:nth-child(odd) {
                    background: #CACACA
                }
                tr:nth-child(even) {
                    background: #FFF
                }
                .no-content {
                    background-color: red;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="title">
                <h1>Coronavírus / API REST do Portal da Transparência do Governo Federal
                </h1>
                <span>/api-de-dados/coronavirus/movimento-liquido-despesa
                Consulta de movimentação líquida mensal das despesas do Poder Executivo Federal pela classificação funcional programática</span>
                </div>
                ${table}
            </div>
            </body>
        </html>
    `;

    execute(data) {

        const rows = data.map(this.createRow).join('')
        const table = this.createTable(rows)
        const html = this.createHtml(table)

        fs.writeFileSync(pathHTML, html)
    }


}

module.exports = createHTML;