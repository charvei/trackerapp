import { BaseService } from './base_service'
import { ActivityEvent } from '../domain/activity_event'
import { BaseDomainEntity } from '../domain/base'
import e from 'express'


interface ActivityEventData {
    activityId: string
    startedAt: string
    finishedAt: string,
}

class ActivityEventService extends BaseService {

    create(data: ActivityEventData) {
        const activityEvent = new ActivityEvent(data.activityId, data.startedAt, data.finishedAt)
        this.repo.add(activityEvent)
        this.repo.commit()
        return activityEvent
    }

    list(activityId?: string): BaseDomainEntity[] {
        let filterFn = undefined

        if (activityId) {
            filterFn = (element: any) => {
                return element.activityId === activityId
            }
        }

        return this.repo.list(filterFn)
    }

}


export { ActivityEventService }