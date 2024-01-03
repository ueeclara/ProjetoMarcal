export interface LoginRepository{
    login(email: string, senha: string):Promise<String>
}