import axios from 'axios';

const ApiCentral = axios.create({
    baseURL: 'https://us-central1-jdrel-central.cloudfunctions.net/api',
});


export function NewAPIError(errorData: ErrorDataModel) {
    ApiCentral.post('/log/add', {
        resource: 'log',
        errorData
    });
}

interface ErrorDataModel {
    appname: string,
    text: string,
    plus: {
        recurso: string,
        status: number,
        payload: {},
        project: string
    }
}