import { BaseDomainEntity } from '../domain/base'
import { InMemoryPersistanceStrategy } from './in_memory_p_s'

interface IRepository {
    add(entity: BaseDomainEntity): BaseDomainEntity
    delete(id: string): void
    get(id: string): BaseDomainEntity
    list(filterFn?: (filter_properties: object) => any[]): BaseDomainEntity[]

    commit(): void
}

class BaseRepository {
    persistanceStrategy: InMemoryPersistanceStrategy

    constructor(persistanceStrategy: InMemoryPersistanceStrategy) {
        this.persistanceStrategy = persistanceStrategy
    }

    add(entity: BaseDomainEntity): BaseDomainEntity {
        this.persistanceStrategy.add(entity)
        return entity
    }

    delete(id: string): void {
        this.persistanceStrategy.delete(id)
    }

    get(id: string): BaseDomainEntity {
        return this.persistanceStrategy.get(id)
    }

    list(filterFn?: (element: any) => boolean): any[] {
        let list_results: BaseDomainEntity[] = this.persistanceStrategy.list()
        if (filterFn) {
            list_results = list_results.filter(element => {
                return filterFn(element)
            })
        }
        return list_results
    }

    commit(): void {
        this.persistanceStrategy.commit()
    }
    
    
}

export { IRepository, BaseRepository }