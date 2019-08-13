$(document).ready(function(){
  // console.log('hello world');

  let newsAPIKey;

  const pageSize = '&pagesize=10'
  const international = 'top-headlines?language=en';
  const local = 'top-headlines?country=nz';

  $.ajax({
    url: 'config.json',
    type: 'GET',
    dataType: 'json',
    success: function(keys){
      newsAPIKey = keys['newsAPIKey'];

      getNews = (filter) => {
        $.ajax({
          url: `https://newsapi.org/v2/${filter}${pageSize}&apiKey=${newsAPIKey}`,
          type: 'GET',
          dataType: 'json',
          success: function(data){
            console.log(data);

          },
          error: function() {
            console.log('something bad happened');
          }
        })
      }

      $('#localBtn').click(function(){
        getNews(local);
      });

      $('#internationalBtn').click(function(){
        getNews(international);
      });




    },
    error: function(){
      console.log('can\'t find config.json');
    }
  });
});
