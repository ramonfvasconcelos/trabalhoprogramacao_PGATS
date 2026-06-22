Trabalho de Integração Contínua com GitHub Actions
Autor: Ramon Fernandes de Vasconcelos

Objetivo

Este projeto tem como objetivo demonstrar a implementação de uma Pipeline de Integração Contínua (CI) utilizando GitHub Actions para execução automatizada de testes.

A solução contempla:

Execução por Push.
Execução Manual.
Execução Agendada (Schedule).
Geração de Relatório de Testes.
Publicação do Relatório na Pipeline.
Documentação da solução.
Tecnologias Utilizadas
Node.js
JavaScript
Mocha
Mochawesome
GitHub Actions
GitHub
Estrutura do Projeto
.github/
   workflows/
    - 01-exec-manual.yaml
    - 02-exec-agendada.yaml
    - 03-exec-postdeploy.yaml
    - 04-exec-integradaCI.yaml
src/
test/
package.json
README.md

Workflows Implementados

01 - Execução Manual
Executa os testes manualmente através do GitHub Actions.
Gatilho utilizado:
workflow_dispatch

02 - Execução Agendada
Executa os testes automaticamente em horário programado.
Gatilho utilizado:
schedule
Configuração:
cron: '1 3 * * 1'

03 - Execução Pós Deploy
Executa automaticamente após alterações enviadas para a branch principal.
Gatilho utilizado:
push
04 - Execução Integrada CI
Workflow que reúne todos os gatilhos estudados:
Push
Workflow Dispatch
Schedule
Fluxo da Pipeline
A pipeline realiza as seguintes etapas:

Checkout do código.
Configuração do Node.js.
Instalação das dependências.
Execução dos testes automatizados.
Geração do relatório Mochawesome.
Publicação do relatório como Artifact.
Testes Automatizados

Os testes foram desenvolvidos utilizando Mocha para validar regras de negócio da Classe de Serviço de Pagamento.
Cenários validados:
- Categoria padrão para valores inferiores a R$ 100,00.
- Caso de borda para valor igual a R$ 100,00.
- Categoria cara para valores superiores a R$ 100,00.
- Validação das propriedades retornadas.
- Retorno do pagamento mais recente.
- Relatório de Testes

O relatório é gerado utilizando Mochawesome.

Configuração:

"test": "mocha --reporter mochawesome"

Arquivos gerados:

mochawesome-report/
   -mochawesome.html
   - mochawesome.json
   - assets/
Publicação dos Resultados

Os relatórios são publicados automaticamente como Artifact da execução utilizando:

actions/upload-artifact@v4

Artifact gerado:

relatorio-integrado-ci
Execução Local

Instalar dependências:

npm install

Executar testes:

npm test

Abrir relatório:

mochawesome-report/mochawesome.html
Conceitos Aplicados
Integração Contínua (CI)
Automação de Testes
Pipeline de Build
Execução Agendada
Execução Manual
Execução Pós Deploy
Publicação de Artefatos
Relatórios Automatizados
Evidências

As evidências de execução encontram-se na aba Actions do GitHub, contendo:

Execuções manuais.
Execuções por push.
Execuções agendadas.
Relatórios publicados.
Artefatos gerados.
Repositório

https://github.com/ramonfvasconcelos/trabalhoprogramacao_PGATS
