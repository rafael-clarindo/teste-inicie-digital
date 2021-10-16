TESTE TÉCNICO 

Abaixo, descrevemos o que precisa ser feito. Informamos que,  o tempo médio de resolução do exercício  é de 2 horas

Pré-requisitos:
- Desenvolver em alguma das linguagens que trabalhamos, a saber:  Node JS ou Laravel
- Desenvolver uma pequena aplicação que realize o consumo de duas APIs, a saber:  uma para leitura de informações e outra para escrita do resultado.

Passos a serem seguidos:

1 - Expor uma API que recebe um intervalo de datas (leva-se em conta a data de início e de fim) e um estado
Ex: http://localhost?state=PR&dateStart=2020-05-10&dateEnd=2020-05-18

2 - Consumir as informações do WebService sobre casos de Covid19 disponível no endereço
https://brasil.io/api/dataset/covid19/caso/data/?state=PR&date=2020-05-10
Para consumir os dados da API pode ser utilizado o token cd06accc7cba9e0b48b4d3106f3ea4359f593725
Passo a passo de como utilizar o token do Brasil IO https://blog.brasil.io/2020/10/31/nossa-api-sera-obrigatoriamente-autenticada/

3 - Eleger as top 10 cidades com maior percentual de casos em relação à população total da cidade no período

4 - Após filtrar as informações desejadas, fazer um POST para cada posição no seguinte formato:

Endpoint
https://us-central1-lms-nuvem-mestra.cloudfunctions.net/testApi

Method
POST

Header
MeuNome: Diego //Alterar para seu nome

Body
{
id: [0-9], // conforme a posição, sendo 0 o maior número de casos
nomeCidade: nomeCidade,
percentualDeCasos: x
}

5 - Subir o projeto em um repositório Git público e responder esse e-mail com o caminho do repositório

6 - Prazo para finalização 16/10 às 23:59.
