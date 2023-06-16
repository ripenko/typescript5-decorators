import { injectable } from "../ioc";
import { ISomeService } from "./ISomeService";

@injectable("ISomeService")
export class SomeService implements ISomeService {
    getSomething() {
        return "Getting something from SomeService";
    }
}
