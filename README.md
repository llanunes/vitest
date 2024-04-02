# vitest

## Instalações:

```bash
npm init -y
```

```bash
npm i typescript
```

```bash
npm i  @types/node tsx tsup -D
```

```bash
npm i vitest vite-tsconfig-paths -D
```

```json
Atualizar scripts no package.json:

"scripts": {
    "test": "vitest run --dir src/test"
},
```


## Primeiros passos:

```
Criar pasta src e dentro dela um arquivo index.ts 
```

```
Dentro da src criar pasta test e dentro de test criar um arquivo nomearquivo.spec.ts
```

```
Dentro da src criar parta factories e dentro de factories um arquivo make-nomearquivo.ts
```

```
Dentro da src criar pasta errors para tratar excessões se necessário. 
```

## Exemplo calc-exception.ts (arquivo da pasta errors)

```ts
export class CalcException extends Error {
    constructor() {
        super("Erro ao efetuar cálculo.")
    }
}
```
```
- Exportação da classe CalcException: A classe CalcException é exportada usando a palavra-chave export, tornando-a acessível para outros módulos que queiram importá-la.

- Extensão da classe Error: A classe CalcException é definida como uma subclasse da classe nativa Error do JavaScript. Isso significa que CalcException herda todas as propriedades e métodos da classe Error, tornando-a uma exceção padrão do JavaScript.

- Construtor: O construtor da classe CalcException é definido. Quando um novo objeto CalcException é criado, ele chama o construtor da classe pai (Error) passando a mensagem de erro como argumento. Esta mensagem de erro será exibida quando a exceção for lançada.
```

## Exemplo index.ts 
```ts
import { CalcException } from "./erros/calc-exception";

export class Sum {
    a: number
    b: number

    constructor(a: number, b: number){
        this.a = a
        this.b = b
    }

    sum() {
        return this.a + this.b
    }

    sumException(){
        if(this.a + this.b !== 5){
            throw new CalcException();   
        }
    }
}

```

```
- Importação de uma exceção personalizada: No início do arquivo, há uma importação da classe CalcException do arquivo calc-exception.ts que está localizado no diretório erros.

- Definição da classe Sum: A classe Sum é definida com dois membros de dados (a e b) e três métodos.

- Constructor: O construtor da classe Sum é definido para aceitar dois parâmetros (a e b) que são números. Ele inicializa os membros de dados a e b da instância com os valores passados como parâmetros.

- Método sum(): Este método sum() retorna a soma dos membros a e b da instância da classe.

- Método sumException(): Este método sumException() verifica se a soma dos membros a e b é igual a 5. Se não for, ele lança uma exceção do tipo CalcException.

- Portanto, essa classe Sum basicamente permite calcular a soma de dois números e também inclui uma verificação de exceção para garantir que a soma seja igual a 5 em determinado momento. Se a soma não for igual a 5, será lançada uma exceção do tipo CalcException.
```





