/**
 * Created by User on 9/5/2016.
 */
var Nerd = require('./models/nerd');

module.exports=function(app){

    app.get('/api/nerds',function(req,res){


        Nerd.find(function(err,nerds){
            if(err){
                res.send(err)
            }
            else{
                res.json(nerds)
            }

        });

    });

    app.get('*',function(req,res){
        res.sendfile('./public/index.html');

    })









};