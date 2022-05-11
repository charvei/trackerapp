import { v4 as uuidv4 } from 'uuid';


interface Serialisable {
    serialise(): object
    deserialise(data: object): BaseDomainEntity
}


abstract class BaseDomainEntity implements Serialisable {
    id: string = uuidv4()
    created_at: string = new Date().toISOString()

    constructor(id: string = uuidv4()) {
        this.id = id
    }

    serialise(): object {
        throw Error("Classes extending BaseDomainEntity should implement serialise themselves.")
    }

    deserialise(data: object): BaseDomainEntity {
        throw Error("Classes extending BaseDomainEntity should implement deserialise themselves.")
    }
}

export {BaseDomainEntity}