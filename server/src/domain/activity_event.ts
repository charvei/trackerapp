import { BaseDomainEntity } from './base';

/**
 * Note: there is no validations pretty much anywhere. Would be good to have some that check that ids reference actual ids and that time is actually a time data type
 */

class ActivityEvent extends BaseDomainEntity {
    activityId: string
    timePerformed: string
    // timeStarted
    // duration // minutes
    // comments? e.g. for 'life event activity where what it is is ambiguous, in the record you can comment: 'moved interstate'

    constructor(activityId: string, timePerformed: string, id?: string) {
        super(id)
        this.activityId = activityId
        this.timePerformed = timePerformed
    }
}


export { ActivityEvent }