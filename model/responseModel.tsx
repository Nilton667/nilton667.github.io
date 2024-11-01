export default interface responseModel {
    result?: {
        success?: boolean,
        error?: string,
        status?: number,
        data?: Array<any>|string|Object|any,
    }
}