import axios from 'axios';

surveyEndpointIp = "http://192.168.0.16"
surveyEndpointPort = "3072" 

const client = axios.create({
    baseURL: `${surveyEndpointIp}:${surveyEndpointPort}`,
    timeout: 1000,
})

/** ACTIVITIES */
function getActivities() {
    return client.get(`/activities/`)
}

function postActivities(data) {
    return client.post('/activities', data)
}

function deleteActivities(id) {
    return client.delete(`/activities/${id}`)
}

/** ACTIVITY EVENTS */
function getActivityEvents(activityId) {
    const activityIdQuery = activityId ? `?activityId=${activityId}` : ""
    console.log(`--> query: ${activityIdQuery}`)
    return client.get(`/activity_events${activityIdQuery}`)
}

function postActivityEvents(data) {
    return client.post('/activity_events', data)
}

export {
    deleteActivities,
    getActivities,
    postActivities,
    getActivityEvents,
    postActivityEvents
}