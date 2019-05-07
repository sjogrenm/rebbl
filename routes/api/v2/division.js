
'use strict';
const dataService = require('../../../lib/DataService.js').rebbl
, express = require('express')
, util = require('../../../lib/util.js');

class DivisionApi{
  constructor(){
    this.router = express.Router({mergeParams: true})
  }
  routesConfig(){
    
    this.router.get("/:league/:season",util.checkCache, async function(req,res){
      try {

        let {league, season} = req.params;

        let data = await dataService.getSeason({league:league, season:season});
        res.json(data.divisions);
      }
      catch (ex){
        console.error(ex);
        res.status(500).send('Something something error');
      }
    });

    this.router.get('/:league/:season/:division', util.checkCache, async function(req, res){
      try {
        let {league,season, division} = req.params;

        let data = await dataService.getSchedules({league:league,season:season,competition:division});
        res.json(data);
      }
      catch (ex){
        console.error(ex);
        res.status(500).send('Something something error');
      }
    });  

    this.router.get('/:league/:season/:division/:round', util.checkCache, async function(req, res){
      try {
        let {league,season, division, round} = req.params;

        let data = await dataService.getSchedules({league:league,season:season,competition:division, round:Number(round)});
        res.json(data);
      }
      catch (ex){
        console.error(ex);
        res.status(500).send('Something something error');
      }
    });  

    return this.router;
  }


}  






module.exports = DivisionApi;