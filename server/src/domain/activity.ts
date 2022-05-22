import { BaseDomainEntity } from './base';


class Activity extends BaseDomainEntity {
    name: string
    desiredFrequency?: number    // once every X days
    tags: string[]

    constructor(name: string, tags: string[], desiredFrequency?: number, id?: string) {
        super(id)
        this.name = name
        this.desiredFrequency = desiredFrequency
        this.tags = tags
    }
}


export { Activity }