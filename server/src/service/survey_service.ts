import { LikertSurvey, LikertItem } from '../domain/survey'
import { BaseService } from './base_service'

interface SurveyItemOptionData {
    label: string
    code: number
}

interface SurveyItemData {
    label: string
    options: SurveyItemOptionData[]
}

interface SurveyData {
    items: SurveyItemData[]
    name: string
}

class SurveyService extends BaseService {

    create(data: SurveyData) {
        const survey = new LikertSurvey(data.items.map(itemData => new LikertItem(itemData.label, itemData.options)), data.name)
        this.repo.add(survey)
        this.repo.commit()
        return survey
    }
}


export { SurveyService, SurveyItemData, SurveyData }