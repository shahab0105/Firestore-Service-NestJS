import {Injectable} from "@nestjs/common";
import { IConnectionService } from "./IConnection.service";

@Injectable()
export class MongoService //implements IConnectionService
{
    connectDB():string{
        return "connected to mongo DB";
    }
}