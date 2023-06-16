import { DependenciesInjection } from "../DependenciesInjection";

export function injectable<T extends new (...args: unknown[]) => unknown>(type?: string) {
    return function (_: T, context: ClassDecoratorContext<T>) {
        context.addInitializer(function (this: T) {
            DependenciesInjection.addService(type || this.name, new this());
        });
    };
}
