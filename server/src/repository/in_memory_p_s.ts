import * as fs from 'fs'
import { BaseDomainEntity } from '../domain/base'

class InMemoryPersistanceStrategy {
    entity_name: string
    data: any

    constructor(entity_name: string) {
        this.entity_name = entity_name
        this.data = this._read_json_store()
    }

    add(entity: BaseDomainEntity) {
        this.data[this.entity_name][entity.id] = entity
        return entity
    }

    delete(id: string): void {
        delete this.data[this.entity_name][id]
    }

    get(id: string) {
        return this.data[this.entity_name][id]
    }

    list(): any[] {
        return Object.values(this.data[this.entity_name])
    }
    
    commit(): void {
        fs.writeFileSync('db.json', JSON.stringify(this.data))
    }

    _read_json_store(): any {
        let data: any = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
        if (!data.hasOwnProperty(this.entity_name)) {
            data[this.entity_name] = {}
        }
        return data
    }
}


export { InMemoryPersistanceStrategy }