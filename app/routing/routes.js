var Article = ('../../models/article.js');
var Note = ('../../models/note.js');

module.exports = function (app) {


      app.get('/', function(req, res){
        res.sendFile('public/index.html')
      });

      // Route to the saved articles
      app.get('/api/saved', function(req, res){
          Article.find({}).populate('notes').limit(6).sort([['_id', 'descending']])
          .exec(function(err, docs){
            if(err){
              console.log(err);
            } else {
              res.send(docs);
            }
            
          })
      });

      // Route to add article to the saved list
      app.post('/api/saved', function(req, res){
          var newArticle = new Article(req.body);

          console.log(req.body)

          var title = req.body.title;
          var date  = req.body.date;
          var url = req.body.url;

          newArticle.save(function(err, docs){
            if (err){
              console.log(err);
            } else {
              res.send(doc._id);
            }
          });
      });

      // Route to delete an article from the saved list
      app.delete('/api/saved', function(req, res){
          var url = req.params('url');

           
           console.log(req.params);

           Article.find({}).remove().exec(function(err, docs){
            if(err){
              console.log(err);
            } else {
              res.send("Deleted");
            }
           })

      });


}// end export




