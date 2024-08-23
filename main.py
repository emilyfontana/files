# Abrir o arquivo e ler as linhas
with open("entrada.txt", "r") as arquivo:
    linhas = arquivo.readlines()

primeira_linha = linhas[0].strip()
n_operacao = int(primeira_linha)
indice = 1

def ler_conjunto(linha):
    elementos = linha.strip().split(', ') #strip para tirar \n
    return set(elementos)

def uniao(conjunto1, conjunto2):
    return conjunto1 | conjunto2

def interseccao(conjunto1, conjunto2):
    return conjunto1 & conjunto2

def diferenca(conjunto1, conjunto2):
    return conjunto1 - conjunto2

def produto_cartesiano(conjunto1, conjunto2):
    resultado = [(n, n2) for n in conjunto1 for n2 in conjunto2]
    return resultado

for _ in range(n_operacao):
    tipo_operacao = linhas[indice].strip()
    conjunto1 = ler_conjunto(linhas[indice + 1])
    conjunto2 = ler_conjunto(linhas[indice + 2])

    if tipo_operacao.lower() == "u":
        print("União conjunto1: ", conjunto1, "conjunto2: ", conjunto2,
              "resultado:", uniao(conjunto1, conjunto2))

    elif tipo_operacao.lower() == "i":
        print("Interseção: conjunto1: ", conjunto1, "conjunto2:",
              conjunto2, "resultado: ", interseccao(conjunto1, conjunto2))

    elif tipo_operacao.lower() == "d":
        print('Diferença: conjunto1: ', conjunto1, 'conjunto2:',
              conjunto2, 'resultado:', diferenca(conjunto1, conjunto2))

    elif tipo_operacao.lower() == "c":
        print('Produto cartesiano: conjunto1: ', conjunto1,
              'conjunto2:', conjunto2, 'resultado:',
              produto_cartesiano(conjunto1, conjunto2))

    else:
        print("Operação inexistente")

    indice += 3 #atualiza pulando as 3 primeiras linhas para dar sequencia 


