'use strict';

const dfff = require('dialogflow-fulfillment')
//const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
//const { Card, Suggestion } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug';

exports.webhookservice=async (req,res)=>{

    //console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    //console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
    const agent = new dfff.WebhookClient({ request: req, response: res });

    function welcome(agent) {
        agent.add("Welcome, Im a flight booking agent! How can i help you?");
        // const demo_image = 'https://dog.ceo/api/breeds/image/random';
        // agent.add(demo_image);
    }

    function bookFlight(agent) {
        agent.add("Ok.I will do it for you.Please tell me your full name?");
    }

    function fallback(agent) {
        agent.add("I didn't understand");
        agent.add("I'm sorry, can you try again?");
    }

    var intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('BookFlight', bookFlight);
    agent.handleRequest(intentMap);



}
