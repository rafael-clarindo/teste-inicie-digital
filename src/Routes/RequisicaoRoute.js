// Rafael Clarindo - Teste Inicie Educação

const RequisicaoController = require('../Requisicoes/RequisicoesController');
module.exports = (app) => {
   app.get('/', RequisicaoController.get);
}