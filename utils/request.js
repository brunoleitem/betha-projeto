const axios = require('axios').default;

async function getRequest() {

    let response = await axios.get('http://api.portaldatransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?funcao=10&mesAnoLancamento=202105&pagina=1', 
    {
        headers: { 'chave-api-dados': '8e131b6b1b354c1561c6f406e0a40112'}
    })
    
    const data = response.data;

    return data;
}


module.exports = getRequest