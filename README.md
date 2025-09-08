# Cadastro de Produtos - React Native

Um aplicativo simples em **React Native** para **cadastrar, editar e excluir produtos**.

> Esse aplicativo foi feito utilizando Windows como Sistema Operacional e sendo simulado no aplicativo Expo Go, disponível para Android e iOS.

---

## Funcionalidades

- **Adicionar produtos** com:
  - Nome
  - Preço
  - Descrição (opcional)
- **Editar produtos** existentes
- **Excluir produtos**
- Lista de produtos com ordenação (por criação ou alfabética)
- Modal de visualização rápida de detalhes do produto
- Persistência dos dados utilizando **SQLite**

---

## Tecnologias e versões utilizadas:

- **Node.js:** v22.18.0
- **npm:** 10.9.3
- **React Native:** 0.79.5
- **Expo CLI:** 6.3.12
- **Expo SDK:** 0.24.21
- **React Navigation:** 7.1.17
- **SQLite:** `expo-sqlite` 15.2.14 

> Essas versões são testadas e compatíveis com o projeto. Versões mais antigas podem causar erros de compilação ou runtime.

---

## Como usar


Este tutorial considera que você já possui Node instalado.

1. **Clone o repositório:**

```bash
git clone <https://github.com/rafasavaris/Storage-App>
```

2. **Instalar Explo CLi**
```bash
npm install -g expo-cli
```
Isso permite criar, iniciar, compilar e gerenciar projetos React Native.


3. **Instalar dependências**
```bash
npm install
```
Esse comando instala todas as dependências necessárias para o projeto funcionar corretamente.

4. **Instale o aplicativo Expo Go na Play Store (Android) ou App Store (iOS)**

5. **Inicie o projeto**
```
npx expo start
```
Isso abrirá o Metro Bundler. Caso você tenha aberto outro aplicativo recentemente, utilize o comando abaixo para limpar o cachê:
```
npx expo start -c
```

6. **Executar no dispositivo**
Dispositivo físico: escaneie o QR code usando o app Expo Go.

---

## Estrutura do projeto
src/
 ├─ components/         # Componentes reutilizáveis
 ├─ database/           # Configuração e funções do SQLite
 └─ screens/            # Telas do app (Home, AddProduct, EditProduct)

Sendo que a pasta ```components``` e a pasta ```screens``` possuem arquivos ```styles.js``` que apresentam os estilos das páginas.
---

## Como usar
* **Adicionar Produto:** Clique no botão + ou Adicionar Produto (quando não há produtos adicionados). Preencha os campos obrigatórios (Nome e Preço) e opcional (Descrição). Clique em Salvar.
* **Editar Produto:** Clique em um produto na lista para abrir o Modal. Clique em Editar. Altere os dados e clique em Salvar. Ao fechar o Alert de sucesso, você volta automaticamente para a tela principal.
* **Excluir Produto:** Na lista, clique no botão de excluir. Confirme a exclusão no Alert.
* **Ordenar Produtos:** Use o botão no canto superior direito para alternar entre ordenação por criação ou alfabética.

---

## Observações
* Todos os dados são armazenados localmente usando SQLite.
* A tabela de produtos é criada automaticamente na primeira execução.

---

## Possíveis melhorias:
* Adicionar pesquisa de produtos.
* Implementar filtros por preço ou categoria.
* Sincronização com backend para persistência em nuvem.