import { SurveyItemResponse, SurveyResponse } from '../domain/survey_response'
import { BaseService } from './base_service'

interface SurveyResponseData {
    surveyId: string
    responses: SurveyItemResponse[]
}

class SurveyResponseService extends BaseService {

    create(data: SurveyResponseData) {
        const survey_response = new SurveyResponse(data.surveyId, data.responses)
        this.repo.add(survey_response)
        this.repo.commit()
        return survey_response
    }
}


export { SurveyResponseService }