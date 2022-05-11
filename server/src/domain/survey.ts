import { BaseDomainEntity } from './base';


class LikertOption {
    label: string
    code: number

    constructor(label: string, code: number) {
        this.label = label
        this.code = code
    }
}

class LikertItem extends BaseDomainEntity {
    label: string
    options: LikertOption[]

    constructor(text: string, options: LikertOption[], id?: string) {
        super(id)
        this.label = text
        this.options = options
    }
}

class LikertSurvey extends BaseDomainEntity {
    name: string
    items: LikertItem[]

    constructor(items: LikertItem[], name: string, id?: string) {
        super(id)
        this.items = items
        this.name = name
    }
}


export { LikertSurvey, LikertItem }