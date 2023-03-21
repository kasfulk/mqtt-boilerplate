import 'module-alias/register';
import dotenv from 'dotenv';
import MQTTHandler from './mqtt/mqtt.handler';

dotenv.config({ path: './.env' });

const mqtt = new MQTTHandler();

mqtt.initializeMosquitto();
