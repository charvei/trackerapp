import { BaseDomainEntity } from './base';


interface SurveyItemResponse {
    surveyItemId: string
    responseValue: number | string 
}

class SurveyResponse extends BaseDomainEntity {
    surveyId: string
    responses: SurveyItemResponse[]

    constructor(surveyId: string, responses: SurveyItemResponse[], id?: string) {
        super(id)
        this.surveyId = surveyId
        this.responses = responses
    }
}


export { SurveyResponse, SurveyItemResponse }