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

      aboutUs = () => {
        $('#articleCardContainer').html('');
        $('#articleCardContainer').append(`<div class="col-auto mb-3">
                                              <div class="card">
                                              <img src="../img/doggos.jpg" class="card-img-top img-fluid">
                                                <div class="card-body">
                                                    <div class="text-center"><h5 class="card-title"><b>More about us!</b></h5></div>
                                                      <div class="card-body text-center">
                                                        <p>Andy and Larissa are two Yoobee Level 6 Web and
                                                        UX students!
                                                        <br>
                                                        <br>
                                                        In groups of two we were asked to utilise a User Interface Library to
                                                        create a single page application that allows the users to browse
                                                        items retrieved from an external API. The app will be a news app that
                                                        allows users to view news stories from around the world. It will use
                                                        <a href="https://newsapi.org">the News API</a>
                                                        <br>
                                                        <br>
                                                        <b>The basic use cases for the application are:</b>
                                                        <br>
                                                        View Article List
                                                        <br>
                                                        View About Page (about the developers, you and this project)
                                                        <br>
                                                        <br>
                                                        <b>The application can be extended with the following use cases</b>
                                                        <br>
                                                        Search articles by Search Term
                                                        <br>
                                                        Filter Articles by Country, Category or Source

                                                        </p>
                                                      </div>
                                                </div>
                                              </div>
                                            </div>`);
      }

      $('#about').click(function() {
        aboutUs();
      })


    },
    error: function(){
      console.log('can\'t find config.json');
    }
  });
});
