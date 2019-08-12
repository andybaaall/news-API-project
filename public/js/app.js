$(document).ready(function(){
  console.log('hello world');

  let newsAPIKey;

  // $.ajax({
  //   url: 'config.json',
  //   type: 'GET',
  //   dataType: 'json',
  //   success: function(keys){
  //     newsAPIKey = keys['newsAPIKey'];
  //     getNews();
  //   },
  //   error: function(){
  //     console.log('can\'t find config.json');
  //   }
  // });

  getNews = () => {
    $.ajax({
      url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`,
      type: 'GET',
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
      },
      error: function() {
        console.log('something bad happened');
      }
    })
  }

  getNews();
})
