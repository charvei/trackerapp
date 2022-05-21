import axios from 'axios';

surveyEndpointIp = "http://192.168.0.16"
surveyEndpointPort = "3072" 

const client = axios.create({
    baseURL: `${surveyEndpointIp}:${surveyEndpointPort}`,
    timeout: 1000,
})

function getSurvey(surveyId) {
    return client.get(`/surveys/${surveyId}`)
}

function postSurveyResponses(data) {
    return client.post(`/survey_responses/`, data)
}

export {
    getSurvey, postSurveyResponses
}