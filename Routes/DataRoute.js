import express from 'express'
import { getData, getProductdata } from '../Controllers/DataController.js';

const Router = express.Router();

Router.post('/data',getData);
Router.get('/productdata/:id',getProductdata)

export default Router