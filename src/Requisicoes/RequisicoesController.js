// Rafael Clarindo - Teste Inicie Educação

let lodash = require("lodash");
const axios = require('axios')
const config = {
   headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Token cd06accc7cba9e0b48b4d3106f3ea4359f593725',
      'User-Agent': 'python-urllib/brasilio-client-0.1.0'
   },
};

exports.get = (req, res, next) => {
   const dataInicial = req.query.dateStart
   const dataFinal = req.query.dateEnd
   const estadoEscolhido = req.query.state

   if (dataInicial != undefined && estadoEscolhido != undefined) {
      axios.get('https://api.brasil.io/v1/dataset/covid19/caso/data/?state=' + estadoEscolhido + '&date=' + dataInicial, config)
         .then((response) => {
            const dadosRecebidos = JSON.parse(JSON.stringify(response.data.results));
            var cidades = [];

            for (var i = 0; i < dadosRecebidos.length; i++) {
               var percentualCasos = ((dadosRecebidos[i].confirmed * 100) / dadosRecebidos[i].estimated_population);
               var cidade = {};
               cidade.nome = dadosRecebidos[i].city;
               cidade.percentualCasos = percentualCasos;
               cidade.casos = dadosRecebidos[i].confirmed;
               cidade.populacaoTotal = dadosRecebidos[i].estimated_population;
               cidades.push(cidade);
            }
            var resultadoJson = JSON.parse(JSON.stringify(cidades));

            resultadoJson.sort(function (a, b) {
               return b.percentualCasos - a.percentualCasos;
            });

            var ranking = [];

            
            for (var i = 0; i < 10; i++) {
               var cidade = resultadoJson[i];
               enviarDados(cidade, i);
               ranking.push(cidade);
            }
            res.status(200).send(JSON.stringify(ranking));

         })
         .catch((error) => {
            res.status(500).send('Houve algum erro, tente novamente mais tarde.' + error);
         })
   } else {
      res.status(200).send('É necessário informar uma data e um estado para buscar dados.');
   }
};


async function enviarDados(cidade, id) {

   let r = await axios({
      method: "POST",
      url: "https://us-central1-lms-nuvem-mestra.cloudfunctions.net/testApi",
      headers: {
         "meuNome": 'Rafael Clarindo'
      },

      params: {
         id: id,
         nomeCidade: cidade.nome,
         percentualCasos: cidade.percentualCasos
      },
   })

   if (r.status == 200) {
      resultado = 'OK';
      console.log('Requisição Status ' + r.status + ' id: ' + id + ' /resposta: ' + JSON.stringify(r.data));
   }
}

