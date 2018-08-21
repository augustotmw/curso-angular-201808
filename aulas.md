# Angular

## Como se organiza o framework?

```
Javascript (Typescript)
+
Angular (+ Node + NPM)
+
Biblioteca de Componentes
```


### Node

- V8-engine
    - 1 thread somente;
    - Non-blocked I.O. - conceito de retorno de thread para um callback para evitar o "travamento" da thread;


### Estrutura

- `./e2e` : end to end (diretório de testes);
- `./node_modules` : diretório de dependências;
- `./src` : principal diretório onde haverá código fonte da aplicação;
- `./.editorconfig` : homogeniza as configurações dos IDE's;
- `./.gitignore` : arquivo de ignore do git
- `./angular.json` : arquivo de centralização de configuração do projeto;
- `./package-lock.json` : no momento atual da "história" do projeto, mostra todas as dependências que foram instaladas e atualizadas durante o tempo de desenvolvimento do projeto. Tipo um backup da história de alterações de dependências;
- `./package.json` : arquivo de configuração do NPM, registrando as versões das dependências usadas;
    - `"private" : true,` : previne que enviemos o código por engano para o npmjs.com, ao enviarmos o comando "`npm publish`";
    - `"dependencies": { ... }` : lista de dependências do projeto;
        - `"dependencia-exemplo.js": "^2.5.4"`: na versão, o "`^`" adiciona a semântica de poder incrementar o número [minor] de nova feature da versão ao baixar a dependencia sem problemas;
        - `"dependencia-exemplo.js": "~0.8.26"` : na versão, o "`~`" adiciona a semântica de poder incrementar o número [patch] de bugfix da versão ao baixar a dependencia sem problemas;
    - `"devDependencies": { ... }` : lista de dependências utilizadas somente durante o desenvolvimento do projeto;
- `./tsconfig.json` : arquivo de configurações do transpilador do TypeScript;
    - `"target": "es5"` : define que o padrão para a transpilação do TypeScript para ECMAScript 5 (no caso do exemplo);
- `./tslint.json` : configuração dos Linters (ferramentas para validar as boas práticas do javascript) para padronização do código;



### SEMVER - Semantic Versioning

- [https://semver.org/](https://semver.org/)

```
 versão 1.14.7

 [major].[minor].[patch]

 ```

Padrões comumente utilizado:

 - `[major]` - Incrementa quando há quebra de compatibilidade
 - `[minor]` - Incrementa quando há uma nova feature
 - `[patch]` - Incrementa quando há um bugfix