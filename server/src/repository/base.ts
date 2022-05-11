import { BaseDomainEntity } from '../domain/base'
import { InMemoryPersistanceStrategy } from './in_memory_p_s'

interface IRepository {
    add(entity: BaseDomainEntity): BaseDomainEntity
    delete(id: string): void
    get(id: string): BaseDomainEntity
    list(): BaseDomainEntity[]

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

    list(): BaseDomainEntity[] {
        return this.persistanceStrategy.list()
    }

    commit(): void {
        this.persistanceStrategy.commit()
    }
    
    
}

export { IRepository, BaseRepository }