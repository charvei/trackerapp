import { BaseService } from './base_service'
import { ActivityEvent } from '../domain/activity_event'


interface ActivityEventData {
    activityId: string
    timePerformed: string
}

class ActivityEventService extends BaseService {

    create(data: ActivityEventData) {
        const activityEvent = new ActivityEvent(data.activityId, data.timePerformed)
        this.repo.add(activityEvent)
        this.repo.commit()
        return activityEvent
    }
}


export { ActivityEventService }