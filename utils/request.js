require('dotenv/config')
const axios = require('axios').default;


async function getRequest() {

    let response = await axios.get('http://api.portaldatransparencia.gov.br/api-de-dados/coronavirus/movimento-liquido-despesa?funcao=10&mesAnoLancamento=202105&pagina=1', 
    {
        headers: { 'chave-api-dados': process.env.SECRET_KEY}
    })
    
    const data = response.data;

    return data;
}


module.exports = getRequest