const getRequest = require('./utils/request');
const createHTML = require('./utils/createhtml');
const createPDF = require('./utils/pdf');


getRequest()
.then(
    (response) => {
        const data = response
        const html = new createHTML()
        html.execute(data)
    })
.then(
    ()=> {
        createPDF()
    })
