$(document).ready(function(){
  console.log('hello world');

  let newsAPIKey;

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      newsAPIKey = keys['newsAPIKey'];

      getNews = () => {
        console.log(newsAPIKey);
        $.ajax({
          url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsAPIKey}`,
          type: 'GET',
          dataType: 'json',
          success: function(data){
            console.log(data);
          },
          error: function() {
            console.log('something bad happened');
          }
        })

        // this is the example request; we'll need to inject variables into it to apply filters / searches
        // var url = 'https://newsapi.org/v2/top-headlines?' +
        //   'country=us&' +
        //   'apiKey=fc46efbdff4b4b87859a04064efd62c2';
        // var req = new Request(url);
        // fetch(req)
        // .then(function(response) {
        //   // console.log(response.json());
        //   var reponse = (response.json());
        //   console.log(response);
        // })
      }

      getNews();

    },
    error: function(){
      console.log('can\'t find config.json');
    }
  });
});
