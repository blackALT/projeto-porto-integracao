# {reprograma} - [s13] - Exercício Prático de Integração com o Mongodb

### Estrutura do projeto

```
pasta-do-projeto
├── src
│   ├── controller
│   ├── model
│   ├── routes
│   └── app.js
├── server.js
├── package.json
```

```
* Esqueleto do projeto
    * Models
    * Controllers
    * Rotas
    * App.js
    * Server.js
```

#### Clientes

```Schema
    nome (String)
    email: (String)
    cpf: (String)
    dataNascimento: (String)
    estadoCivil: (String)
    telefone: (Number)
    comprou: (Boolean)
```

#### Contratos entregues

| Verbo        | Recurso                  | Descrição                              |
| ------------ | ------------------------ | -------------------------------------- |
| GET          | `/clientes`                | Retornar todos os clientes              |
| GET          | `/clientes/compradores`            | Retornar apenas clientes compradores  |
| GET         | `/clientes/{cpf}`                | Retornar apenas clientes por CPF          |
| POST          | `/clientes`            | Cadastrar novo cliente        |

---
---


### Esse projeto prático possui como finalidade consolidar os conhecimentos adquiridos com o curso até este momento.

**1 -** Instalar a dependência do mongoose no projeto:

```
npm install mongoose
```

**2 -**  Criar a string de conexão com o mongo, lembre-se que o nome do banco será : clientes. Lembre-se de criar a conexão e validar se realmente o banco está logado exibindo uma mensagem de suceso no console.

**3 -**  Após se certificar de que existe conexão com o mongo, será necessário estruturar o seu objeto que será armazenado no banco, o clientes (clientesSchema). 

O seu schema de cliente deverá conter as seguintes propriedades:
```
nome (String)
email: (String)
cpf: (String)
dataNascimento: (String)
estadoCivil: (String)
telefone: (Number)
comprou: (Boolean)
```

**4 -**  Recomendamos criar uma coleção do postman para armazenar as suas requisições.

**5 -**  O Seu projeto deverá conter as seguintes rotas/endpoints com os respectivos retornos:

```
POST/clientes
Incluir um novo cliente conforme as características informadas no contrato do model. (HTTP 201 OK)
Resposta:
{
    "status": true,
    "mensagem": "Cliente incluido com sucesso"
}


GET/clientes
Retornar a lista com todos os clientes (HTTP 200 OK)
Resposta:
[
    {
        "_id": "5dcd81f42e2aab923cbd653d",
        "email": "marilia.oliveira@outlook.com",
        "nome": "Marilia Messias",
        "cpf": 1234567890,
        "dataNascimento": "1992-04-03T03:00:00.000Z",
        "estadoCivil": "Solteira",
        "telefone": 123456789,
        "comprou": true
    }
]

GET/clientes/compradores
Retorna a lista com os clientes que já realizaram alguma compra (HTTP 200 OK)
Resposta:
[
    {
        "nome": "Marilia Messias",
        "email": "marilia.oliveira@outlook.com"
    },
    {
        "nome": "Joaquina Messias",
        "email": "marilia.oliveira@outlook.com"
    },
    {
        "nome": "Ana Messias",
        "email": "marilia.oliveira@outlook.com"
    },
    {
        "nome": "Camila Messias",
        "email": "marilia.oliveira@outlook.com"
    }
]

GET/clientes/{cpf}
Retornar a lista de clientes de acordo com o elemento informado como parâmetro (HTTP 200 OK)
Resposta:
[
    {
        "_id": "5dcd82ad5777b7b184ae38e3",
        "email": "marilia.oliveira@outlook.com",
        "nome": "Joaquina Messias",
        "cpf": 123456789,
        "dataNascimento": "1992-04-03T03:00:00.000Z",
        "estadoCivil": "Solteira",
        "telefone": 123456789,
        "comprou": true
    }
]
```
