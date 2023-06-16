export class DependenciesInjection {
    private static container: { [type: string]: unknown; } = {};

    public static addService<TService>(type: string, service: TService): void {
        this.container[type] = service;
    }

    public static getService<TService>(type: string): TService {
        const result = this.container[type] as TService;
        if (result == null) {
            console.warn(`No Dependency for '${type}'`);
        }
        return result;
    }
}
