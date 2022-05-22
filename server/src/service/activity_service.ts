import { Activity } from '../domain/activity'
import { BaseService } from './base_service'


interface ActivityData {
    name: string
    desiredFrequency?: number
    tags: string[]
}

class ActivityService extends BaseService {

    create(data: ActivityData) {
        const activity = new Activity(data.name, data.tags, data.desiredFrequency)
        this.repo.add(activity)
        this.repo.commit()
        return activity
    }
}


export { ActivityService }