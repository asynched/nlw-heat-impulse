type AbstractClassType = abstract new (...args: any) => any
type GenericClassType = new (...args: any) => any

type GenericServiceType = {
  service: any
  args: any[]
}

type ModuleFactoryOptionsType<T extends AbstractClassType> = {
  controller: T
  services: GenericServiceType[]
}

export default class ModuleFactory {
  static getModule<T extends GenericClassType>({
    controller,
    services,
  }: ModuleFactoryOptionsType<T>): InstanceType<T> {
    const instantiatedServices = services.map((serviceItem) => {
      const { service, args } = serviceItem
      return new service(...args)
    })

    const instance = new controller(...instantiatedServices)
    ModuleFactory.bindControllerMethods(controller, instance)

    return instance
  }

  private static bindControllerMethods(
    baseClass: AbstractClassType,
    controller: InstanceType<any>
  ) {
    Object.getOwnPropertyNames(baseClass.prototype)
      .filter((method) => method !== 'constructor')
      .forEach((method) => {
        controller[method] = controller[method].bind(controller)
      })
  }
}
