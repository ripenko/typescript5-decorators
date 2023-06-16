import { inject } from "./ioc";
import { ISomeService } from "./services";

function log<This, TTarget extends (this: This, ...args: any) => void>(target: TTarget, context: ClassMethodDecoratorContext) {
    return function (this: This, ...args: any) {
        console.log(`[${String(context.name)}]: Start`);
        const result = target.apply(this, args);
        console.log(`[${String(context.name)}]: End`);
        return result;
    }
}

export class App {
    @inject("ISomeService")
    public someService: ISomeService | null = null;

    @log
    public execute() {
        console.log(this.someService?.getSomething() || "Nothing");
    }
}