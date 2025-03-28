# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);


```
Qual das seguintes alternativas melhor descreve o que o código faz?

A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.

O resultado será true se:<br>
i) O resto da divisão de p por q for 1 e r * 2 for maior que p, ou<br>
ii) A soma de q + r for menor que p.
Então, como o resto de 10/3 é 1 e, 12 > 10, a expressão imprime true.

Além disso, na segunda parte, o código calcula o produto de todos os números do array. Percorre cada elemento do array e multiplica o produto atual pelo elemento.


______

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    while (limite >= totalCompras && i < compras.length) {
        totalCompras += compras[i];
        i++;
    }

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
}
```
Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

A) Ambas as funções exibirão: 'Seu crédito foi aprovado. Saldo disponível: 400.'

Justificativa: <br>
O while verifica a condição antes de executar, mas como totalCompras começa em 2500 (dentro do limite), ambas as funções somam todos os valores do array (4600) e calculam o saldo (400), mantendo o status "aprovado".

O do...while executa pelo menos uma vez antes de verificar a condição, mas no caso específico desse código, isso não altera o resultado.
______

**3)** Considere o seguinte trecho de código em JavaScript:
```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```
Qual das seguintes alternativas melhor descreve o comportamento do código?

B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".

Justificativa: <br>

______

**4)** Qual será o resultado impresso no console após a execução do seguinte código?
```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
    var consumo = consumoDispositivos[i];

    if (consumo <= energiaDisponivel) {
        console.log("Dispositivo " + (i+1) + " ligado. Energia restante: " + (energiaDisponivel - consumo));
        energiaDisponivel -= consumo;
    } else if (consumo <= energiaDisponivel + bateriaExtra) {
        console.log("Dispositivo " + (i+1) + " ligado com bateria extra. Energia restante: " + ((energiaDisponivel + bateriaExtra) - consumo));
        energiaDisponivel = 0;
        bateriaExtra -= (consumo - energiaDisponivel);
    } else {
        console.log("Dispositivo " + (i+1) + " não pode ser ligado. Energia insuficiente.");
    }
}
```

Escolha a opção que responde corretamente:


D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

Justificativa: <br>

-Dispositivo 1 (consumo = 300)
energiaDisponivel = 1200
Energia suficiente → energiaDisponivel -= 300 = 900
Saída: "Dispositivo 1 ligado. Energia restante: 900"

-Dispositivo 2 (consumo = 600)
energiaDisponivel = 900
Energia suficiente → energiaDisponivel -= 600 = 300
Saída: "Dispositivo 2 ligado. Energia restante: 300"

-Dispositivo 3 (consumo = 500)
energiaDisponivel = 300, bateria extra = 400
Usa bateria extra → (300 + 400) - 500 = 200
energiaDisponivel = 0, bateriaExtra = 200
Saída: "Dispositivo 3 ligado com bateria extra. Energia restante: 200"

-Dispositivo 4 (consumo = 200)
energiaDisponivel = 0, bateriaExtra = 200
Usa bateria extra → bateriaExtra -= 200 = 0
Saída: "Dispositivo 4 ligado com bateria extra. Energia restante: 0"

-Dispositivo 5 (consumo = 400)
energiaDisponivel = 0, bateriaExtra = 0
Energia insuficiente
Saída: "Dispositivo 5 não pode ser ligado. Energia insuficiente."

______

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.


Justificativa: <br>

O update() não carrega assets (isso ocorre no preload()). Além disso, ele não é chamado apenas uma vez (diferente do create(), que configura o jogo).
______

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.

Justificativa: <br>

Matter.js não lida com eventos de entrada do usuário, não é um motor gráfico e não é um sistema de animação automática, e sim, para simular colisões

______

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```
Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

Resposta: <br>

INÍCIO
    DECLARE valorTotal: REAL
    
    ESCREVA "Digite o valor total da compra:"
    LEIA valorTotal
    
    SE valorTotal < 50.00 ENTÃO
        ESCREVA "Frete não disponível!"
    SENÃO SE valorTotal >= 50.00 E valorTotal <= 199.99 ENTÃO
        ESCREVA "Frete com custo adicional!"
    SENÃO
        ESCREVA "Frete grátis!"
    FIM SE
FIM
______

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```
Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.

Resposta: <br>

CLASSE Veiculo
    ATRIBUTOS:
        modelo
        ano

    MÉTODO Construtor(modelo, ano)
        SELF.modelo ← modelo
        SELF.ano ← ano

    MÉTODO CalcularConsumo(km, eficiencia)
        ESCREVER "Método genérico. Deve ser sobrescrito nas subclasses."
FIM CLASSE

// Classe Carro herdando de Veiculo
CLASSE Carro HERDA Veiculo
    ATRIBUTOS:
        capacidadeTanque  // Capacidade do tanque em litros

    MÉTODO Construtor(modelo, ano, capacidadeTanque)
        CHAMAR SUPER(modelo, ano)
        SELF.capacidadeTanque ← capacidadeTanque

    MÉTODO CalcularConsumo(km, eficiencia)
        consumo ← km / eficiencia
        ESCREVER "O carro consumiu ", consumo, " litros de combustível."
FIM CLASSE

// Classe Moto herdando de Veiculo
CLASSE Moto HERDA Veiculo
    ATRIBUTOS:
        tipoMotor  

    MÉTODO Construtor(modelo, ano, tipoMotor)
        CHAMAR SUPER(modelo, ano)
        SELF.tipoMotor ← tipoMotor

    MÉTODO CalcularConsumo(km, eficiencia)
        consumo ← km / eficiencia
        ESCREVER "A moto consumiu ", consumo, " litros de combustível."
FIM CLASSE

// Exemplo de Uso:
INICIO
    carro1 ← NOVO Carro("Sedan X", 2023, 50)
    moto1 ← NOVO Moto("Street 125", 2022, "125cc")

    CHAMAR carro1.CalcularConsumo(500, 12)  // 500 km com eficiência de 12 km/l
    CHAMAR moto1.CalcularConsumo(500, 30)   // 500 km com eficiência de 30 km/l
FIM

______

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:
```
    velocidade = velocidadeInicial - desaceleracao * tempo
```
Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.

Resposta: <br>

Função CalcularTempoPouso(velocidadeInicial, desaceleracao, velocidadeSegura, tempoMaximo):  
    tempo <- 0  

    # Enquanto a velocidade for maior que a velocidade segura e não ultrapassar o tempo máximo  
    Enquanto velocidadeInicial > velocidadeSegura E tempo < tempoMaximo faça:  
        tempo <- tempo + 1  
        velocidadeInicial <- velocidadeInicial - desaceleracao  

    # Verifica se a velocidade atingiu um nível seguro dentro do tempo máximo  
    Se velocidadeInicial <= velocidadeSegura então:  
        Retornar "Pouso seguro! Tempo necessário: " + tempo + " segundos."  
    Senão:  
        Retornar "Falha! O tempo máximo foi excedido antes de atingir uma velocidade segura."  

### Exemplo de uso  
velocidadeEntrada <- 5000   # Velocidade inicial em m/s  
desaceleracao <- 100        # Redução de velocidade por segundo  
velocidadeSegura <- 500     # Velocidade máxima segura para pouso  
tempoMaximo <- 60           # Tempo máximo permitido para desaceleração  

resultado <- CalcularTempoPouso(velocidadeEntrada, desaceleracao, velocidadeSegura, tempoMaximo)  
Escrever(resultado)
______

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se as matrizes têm o mesmo número de linhas e colunas  
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."  
    Senão:  
        linhas <- tamanho(matrizA)  
        colunas <- tamanho(matrizA[0])  
        matrizResultado <- novaMatriz(linhas, colunas)  

        # Loop para percorrer cada elemento das matrizes e calcular a soma  
        Para i de 0 até linhas-1 faça:  
            Para j de 0 até colunas-1 faça:  
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]  

        Retornar matrizResultado  

# Exemplo de uso da função  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
investimentosAno2 <- [[1200, 1800], [1300, 2700]]  

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)  
Escrever("Total de investimentos acumulados:")  
ImprimirMatriz(totalInvestimentos)  
```
Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.

Resposta: <br>

Função MultiplicarMatrizesInvestimento(matrizA, matrizB):  
    # Verifica se a multiplicação é possível (colunas de A = linhas de B)  
    Se tamanho(matrizA[0]) ≠ tamanho(matrizB) então:  
        Retornar "As matrizes não podem ser multiplicadas. Dimensões incompatíveis."  

    linhasA <- tamanho(matrizA)  
    colunasA <- tamanho(matrizA[0])  
    colunasB <- tamanho(matrizB[0])  

    # Cria uma matriz resultado com dimensões adequadas  
    matrizResultado <- novaMatriz(linhasA, colunasB, 0)  

    # Loop para multiplicação de matrizes  
    Para i de 0 até linhasA-1 faça:  
        Para j de 0 até colunasB-1 faça:  
            Para k de 0 até colunasA-1 faça:  
                matrizResultado[i][j] <- matrizResultado[i][j] + (matrizA[i][k] * matrizB[k][j])  

    Retornar matrizResultado  

### Exemplo de uso  
investimentosAno1 <- [[1000, 2000], [1500, 2500]]  
fatoresCrescimento <- [[1.1, 0.9], [0.8, 1.2]]  

impactoInvestimentos <- MultiplicarMatrizesInvestimento(investimentosAno1, fatoresCrescimento)  

Escrever("Impacto financeiro dos investimentos:")  
ImprimirMatriz(impactoInvestimentos)  

