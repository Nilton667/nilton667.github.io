import responseModel from "../model/responseModel";

class Http{
    
    host: string;
    constructor(){
        this.host = '/';
    }

    async post(route: string, {body}:{body: object}) : Promise<responseModel>{

        const requestHeaders: HeadersInit = new Headers()

        return await fetch(`${this.host+route}`, 
            {
                headers: requestHeaders,
                method: 'POST',
                body: JSON.stringify(body)
            },
        )
        .then(response => response.json())
        .then(response => {
            return response;
        })
        .catch(err => {
            return err;
        });
    }

    async get(route: string) : Promise<responseModel>{

        const requestHeaders: HeadersInit = new Headers();

        return await fetch(`${this.host+route}`, 
            {
                headers: requestHeaders,
                method: 'GET',
            },
        )
        .then(response => response.json())
        .then(response => {
            return response;
        })
        .catch(err => {
            return err;
        });
    }
}

export {Http}