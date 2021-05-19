<h4 align="center"> 
	🚧  Error Tracker 🚀 Em construção...  🚧
</h4>

### 🤓 Como utilizar

Adicione o pacote ao seu projeto:
```bash
$ npm install e76aa0dbb2b3f9aeefb78f6bdbecfaab
```

Utilize onde quiser:
```ts
import {NewAPIError} from 'jdrel-error-tracker'

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