function aboutUs() {
  $('#articleCardContainer').html('');
  $('#articleCardContainer').append(`<div class="col-auto mb-3">
                                        <div class="card">
                                        <img src="../img/doggos.jpg" class="card-img-top">
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
                                                  <a href="https://newsapi.org">he News API</a>
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
