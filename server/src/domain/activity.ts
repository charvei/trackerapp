import { BaseDomainEntity } from './base';


class Activity extends BaseDomainEntity {
    name: string
    desiredFrequency?: number    // once every X days
    intervention_tags: string[]

    constructor(name: string, intervention_tags: string[], desiredFrequency?: number, id?: string) {
        super(id)
        this.name = name
        this.desiredFrequency = desiredFrequency
        this.intervention_tags = intervention_tags
    }
}


export { Activity }