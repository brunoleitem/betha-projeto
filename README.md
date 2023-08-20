# COVID-19 brazil public expenses to PDF.

This is a technical project for a interview. The idea is to get all the public expenses from the government API and list them as a pdf file.

### Prerequisites

```
Node.js
```

### Installing

After cloning the project, install the dependencies

```
 npm install
```

Create a .env file with the [api access key](http://www.portaldatransparencia.gov.br/api-de-dados/cadastrar-email).

```
SECRET_KEY=
```

Run the project

```
npm run app
```

## Used dependencies

    axios
    html-pdf
    dotenv
