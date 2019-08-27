import React from 'react'

class FeatureBlog extends React.Component {
  render () {
    return (
      <div class="latest-news">
          <div class="tab-box d-flex justify-content-between">
              <div class="sec-title">
                  <h5>Nhịp Sống Edutour</h5>
              </div>
              {/* Nav tabs */}
              {/* <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                      <a class="nav-link active show" data-toggle="tab" href="#tech">Technology</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link show" data-toggle="tab" href="#busi">Business</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link show" data-toggle="tab" href="#spor">Sports</a>
                  </li>
              </ul> */}
          </div>
          {/* Tab panes */}
          <div class="tab-content">
              <div class="tab-pane active show">
                  <div class="row">
                      <div class="col-md-6">
                        <div class="lt-item-bg">
                            <img src="i1.wp.com/edutour.vn/wp-content/uploads/2019/07/hands-600497_960_7205617.jpg?resize=800%2C500&ssl=1" alt="" class="img-fluid" />
                            <h6><a href="">These sentences are selected from various online news.</a></h6>
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item">Technology</li>
                                <li class="list-inline-item">February 11, 2019</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque labore, quam voluptatibus ipsum. Exde tenetur, quasi, provident animi magni voluptas fugit Itaque labore quae ad........</p>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="lt-item-sm d-flex col-md-12">
                          <div class="row">
                            <div class="lt-img col-md-4">
                                  <a href=""><img src="i1.wp.com/edutour.vn/wp-content/uploads/2019/07/hands-600497_960_7205617.jpg?resize=800%2C500&ssl=1" alt="" /></a>
                              </div>
                              <div class="img-content col-md-8">
                                  <p><a href="">These sentences are selected from various online news.</a></p>
                                  <span>February 11, 2019</span>
                              </div>
                          </div>
                        </div>
                        <div class="lt-item-sm d-flex col-md-12">
                          <div class="row">
                            <div class="lt-img col-md-4">
                                  <a href=""><img src="i1.wp.com/edutour.vn/wp-content/uploads/2019/07/hands-600497_960_7205617.jpg?resize=800%2C500&ssl=1" alt="" /></a>
                              </div>
                              <div class="img-content col-md-8">
                                  <p><a href="">These sentences are selected from various online news.</a></p>
                                  <span>February 11, 2019</span>
                              </div>
                          </div>
                        </div>
                        <div class="lt-item-sm d-flex col-md-12">
                          <div class="row">
                            <div class="lt-img col-md-4">
                                  <a href=""><img src="i1.wp.com/edutour.vn/wp-content/uploads/2019/07/hands-600497_960_7205617.jpg?resize=800%2C500&ssl=1" alt="" /></a>
                              </div>
                              <div class="img-content col-md-8">
                                  <p><a href="">These sentences are selected from various online news.</a></p>
                                  <span>February 11, 2019</span>
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default FeatureBlog
