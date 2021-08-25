const fs = require('fs')
const path = require('path')
const pdf = require('html-pdf')

const config = {
    'orientation': 'landscape',
    'border': "20px"
}



function createPDF() {

    

    if (fs.existsSync(path.join(__dirname, '..', 'template.html'))) {

        const html = fs.readFileSync(path.join(__dirname, '..', 'template.html'), 'utf8')

        pdf.create(html, config).toFile('./template.pdf', function(err,res) {
            if (err) {
                console.log(err)
            }
            console.log(res)
        })
    }   
        

} 

module.exports = createPDF