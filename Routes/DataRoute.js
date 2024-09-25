import express from 'express'
import { getData } from '../Controllers/DataController.js';

const Router = express.Router();

Router.post('/data',getData);

export default Router