<h4 align="center"> 
	🚧  Error Tracker 🚀 Em construção...  🚧
</h4>

### 🤓 Como utilizar

Adicione o pacote ao seu projeto:
```bash
$ yarn add @devjdrel2001/error-tracker
```

Utilize onde quiser:
```ts
import { NewAPIError } from '@devjdrel2001/error-tracker'

NewAPIError(errorData)
```

Como gostamos de debugar rapidamente, é importantíssimo que o errorData esteja preenchido corretamente. 😜
```ts
errorData = 
    {
        appname: 'application name',
        text: 'error description',
        plus: {
          recurso: '/example',
          status: 500,
          payload: {},
          project: 'KissFlow',
          },
    }
```