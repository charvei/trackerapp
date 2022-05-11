import { BaseDomainEntity } from '../domain/base'
import { IRepository } from './base'
import { InMemoryPersistanceStrategy } from './in_memory_p_s'


class SurveyRepository implements IRepository {
    persistanceStrategy = new InMemoryPersistanceStrategy("survey")

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


export { SurveyRepository }