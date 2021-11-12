'use strict';
const express = require('express')
  , util = require('../../lib/util.js');


class Standings{
	constructor(){
		this.router = express.Router({mergeParams:true});
	}


  routesConfig(){
    this.router.get('/:league', util.cache(300), async function(req, res){
      let data = {company:req.params.company};
      if(data.company ==="hjmc")
        res.render('rebbl/standings/hjmc', data);
      //if(req.params.league === "Rebbl One Minute League")
      //  res.render('rebbl/standings/hjmc', data);
      else
        res.render('rebbl/standings/index', data);
    });
    this.router.get('/:league/:season/:competition', async function(req, res){
      let data = {company:req.params.company, league:req.params.league, competition:req.params.competition, season:req.params.season};
      if(data.company ==="caster")
        res.render('rebbl/standings/caster', data);
      else
        res.render('rebbl/standings/index', data);
    });
    return this.router;
  }
}  

module.exports = Standings;