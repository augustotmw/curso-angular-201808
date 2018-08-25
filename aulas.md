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



 ### CLI

 - `ng new` : 
 - `ng generate {component/pipe/service}` :
 - `ng serve {--open}` :
 - `ng build` :




 ## Novo módulo de componente

 Vamos usar como o exemplo, um componente chamado "foto" tem a seguinte estrutura:
 ```
 - src
    |- foto
        |- foto.component.html
        |- foto.component.ts
        |- foto.module.ts
 ```





## Atributos - ways to bind

### Atributos utilizando colchetes - `[attr]`

```html
<img width="500" class="img-fluid d-block mx-auto" [alt]="titulo" [src]="url">
```

- Um atributo entre colchetes, como o `[src]` por exemplo, indica a realização de uma associação (__*binding*__) entre este atributo e sua fonte externa de dados. Realiza um bind unidirecional, caminhando da fonte de dados para a view;



### Atributos utilizando parenteses - `(attr-event)`

```html
<form class="col-sm-7" (ngSubmit)="salvar()"></form>
```
- Utilizado somente para eventos;


### Atributos utilizando parenteses+colchetes - `[(attr)]`

```html
<input type="text" id="txtTitulo" name="titulo" class="form-control" [(ngModel)]="foto.titulo" />
```
- two-way data-bind

#### two-way data-bind feito com `[attr]` e `(attr)`
```html
<input type="text" id="txtTitulo" class="form-control" [value]="foto.titulo" (input)="foto.titulo = $event.target.value" />
```


### Atributos utilizando cerquilha - `#attr`

```html
<input type="text" id="txtTitulo" name="titulo" class="form-control" [(ngModel)]="foto.titulo" required #titulo="ngModel" />

```

- Cria uma "variável de tela" uma referência na tela ao elemento


## Paralelos do CRUD vs REST

| OP: | C(reate) | R(etrieve) | U(pdate) | D(elete) |
| --- | --- | --- | --- | --- |
| Http: | POST | GET | PUT | DELETE |


## Desestruturação de objetos JS:

#### Object

```javascript
//es6

var obj1 = {...obj2, ...obj3};

//transpila para

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var obj1 = _extends({}, obj2, obj3);
```

#### Array

```javascript
//es6

let l1 = [1,2,3];
let l2 = [5,6,7];

let l3 = [...l1,4,...l2]

//transpila para

var l1 = [1, 2, 3];
var l2 = [5, 6, 7];

var l3 = [].concat(l1, [4], l2);
```





## Shadow DOM

- Técnica para tentativa de isolamento de componentes e seus assets na view sem um influenciar o outro;
- Ainda não está disponível na maioria dos navegadores;