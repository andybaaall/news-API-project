const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('99fc1da6f5aa4cefbd6595730ee0d09e');

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

$('#business').on('click',function(e){
  var query = $('#searchquery').val();
  var url = 'https://newsapi.org/v2/sources?apiKey=99fc1da6f5aa4cefbd6595730ee0d09e';

  $.ajax({
    url: url,
    method: "GET",
    dataType: "json",

    success: function(news){
      console.log('success');
    },

    error: function(){
      console.log('bummer');
    }
  });
};

// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
// });

app.use(express.static('./public'));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd')));
app.use('/js', express.static(path.join(__dirname, 'public/js/script.js')));





app.listen(port, () => console.log(`application is running on port ${port}`));
