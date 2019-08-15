$(document).ready(function(){
  // console.log('hello world');

  let newsAPIKey;

  const pageSize = '&pagesize=10'

  // filters
  const international = 'top-headlines?language=en';
  const local = 'top-headlines?country=nz';
  const localSports = 'top-headlines?country=nz&category=sports'
  // const localEntertainment =
  // const localHealth =
  // const localBusiness =


// /Users/932400399/Desktop/virtualServers/server1/www/news-API-project/config.json
// /Users/932400399/Desktop/virtualServers/server1/www/news-API-project/public/js/app.js


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
            // console.log(data);
            $('#articleCardContainer').empty();

            for (var i = 0; i < data.articles.length; i++) {
              $('#articleCardContainer').append(`<div class="col-12 mb-3">
                                                    <div class="card">
                                                    <img src="${data.articles[i].urlToImage}" class="card-img-top">
                                                      <div class="card-body">
                                                          <div class="card-title"><h5 class="card-title text-center">${data.articles[i].title}</h5></div>
                                                            <div class="card-body">
                                                              <p class="card-text text-center">${data.articles[i].description}</p>
                                                              <a href="${data.articles[i].url}"><p class="text-center">Read more</p></a>
                                                            </div>
                                                      </div>
                                                    </div>
                                                  </div>`);
            }
          },
          error: function(){
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
