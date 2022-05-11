import { BaseDomainEntity } from '../domain/base'
import { InMemoryPersistanceStrategy } from '../repository/in_memory_p_s'
import { BaseRepository } from '../repository/base'

class BaseService {

    repo: BaseRepository = new BaseRepository(new InMemoryPersistanceStrategy(this.constructor.name.slice(0, -"Service".length)))

    get(id: string): BaseDomainEntity {
        return this.repo.get(id)
    }

    list(): BaseDomainEntity[] {
        return this.repo.list()
    }

    delete(id: string): void {
        this.repo.delete(id)
        this.repo.commit()
    }
}


export { BaseService }