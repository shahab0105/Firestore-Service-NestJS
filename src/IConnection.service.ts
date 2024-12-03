export interface IConnectionService{
    connectDB():Promise<string>;
}