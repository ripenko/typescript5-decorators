import { DependenciesInjection } from "../DependenciesInjection";

export function inject<This, T>(type: string) {
    return function (
        _target: undefined,
        _context: ClassFieldDecoratorContext<This, T>
    ) {
        return function (this: This, value: T) {
            if (value == null) {
                return DependenciesInjection.getService<T>(type);
            }
            return value;
        };
    };
}
