import express from "express"
import { address } from "ip"

import { ActivityEventService } from "../service/activity_event_service"
import { ActivityService } from "../service/activity_service"
import { SurveyResponseService } from "../service/survey_response_service"
import { SurveyService } from "../service/survey_service"

const app = express()

app.use(express.json())

const port = 3072
const ipAddress = address()

app.get("/", function (req, res) {
    res.send("Hello World! :)")
})

/***** REQUEST HANDLERS *****/

/***** SURVEYS *****/
app.post("/surveys", function (req, res) {
    // return new SurveySersvice().create({items: [{text: "sup", levels:5, inverse: false}]})
    const survey = new SurveyService().create(req.body)
    res.send(survey)
})

app.delete("/surveys/:surveyId", function (req, res) {
    res.send(new SurveyService().delete(req.params.surveyId))
})

app.get("/surveys/:surveyId", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(new SurveyService().get(req.params.surveyId))
})

app.get("/surveys", function (req, res) {
    res.send(new SurveyService().list())
})

/***** SURVEY RESPONSES *****/
 app.post("/survey_responses", function (req, res) {
    const survey_response = new SurveyResponseService().create(req.body)
    res.send(survey_response)
})

app.delete("/survey_responses/:id", function (req, res) {
    res.send(new SurveyResponseService().delete(req.params.id))
})

app.get("/survey_responses/:id", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(new SurveyResponseService().get(req.params.id))
})

app.get("/survey_responses", function (req, res) {
    res.send(new SurveyResponseService().list())
})

/***** ACTIVITIES *****/
const activitiesPath = "/activities"

app.post(activitiesPath, function (req, res) {
    res.send(new ActivityService().create(req.body))
})

app.delete(`${activitiesPath}/:id`, function (req, res) {
    res.send(new ActivityService().delete(req.params.id))
})

app.get(`${activitiesPath}/:id`, function (req, res) {
    res.send(new ActivityService().get(req.params.id))
})

app.get(activitiesPath, function (req, res) {
    res.send(new ActivityService().list())
})

/***** ACTIVITY EVENTS *****/
const activityEventsPath = "/activity_events"

app.post(activityEventsPath, function (req, res) {
    res.send(new ActivityEventService().create(req.body))
})

app.delete(`${activityEventsPath}/:id`, function (req, res) {
    res.send(new ActivityEventService().delete(req.params.id))
})

app.get(`${activityEventsPath}/:id`, function (req, res) {
    res.send(new ActivityEventService().get(req.params.id))
})

app.get(activityEventsPath, function (req, res) {
    res.send(new ActivityEventService().list())
})

app.listen(port, ipAddress, () => {
    console.log(`Example app listening at http://${ipAddress}:${port}`)
})
