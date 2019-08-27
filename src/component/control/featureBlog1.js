import React from 'react'

class FeatureBlog extends React.Component {
  render () {
    return (
      <div className='featured-blog'>
        <div className='container'>
          <div className='row'>

            <div className='featured-layout featured-blog-view-1'>
              <div className='featured-blog-items'>
                <div className='news-snippet'>
                  <a rel='bookmark' className='featured-image'>
                    <img width='300' height='200'
                      src='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/adult-1868049_960_720-300x200.jpg'
                      className='attachment-medium size-medium wp-post-image' alt=''
                      srcSet='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/adult-1868049_960_720-300x200.jpg 300w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/adult-1868049_960_720-768x512.jpg 768w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/adult-1868049_960_720-600x400.jpg 600w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/adult-1868049_960_720.jpg 960w'
                      sizes='(max-width: 300px) 100vw, 300px' />
                  </a>

                  {/* summary */}
                  <div className='summary'>
                    <h6 className='category'><a>Design</a></h6>
                    <h6 className='category'><a>Fashion</a></h6>

                    <h3 className='news-title'><a rel='bookmark'>Leave for the far world of grammar</a></h3>

                    <div className='info'>
                      <ul className='list-inline'>
                        <li>
                          <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                            data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                            data-fa-i2svg=''>
                            <path fill='currentColor' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'></path>
                          </svg>
                          <a>June 11, 2018</a>
                        </li>
                      </ul>
                    </div>

                    <div className='summary-excerpt'>
                      <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                        unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                        decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because
                        there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little
                        Blind Text didn’t listen.</p>
                    </div>
                    <a rel='bookmark' className='readmore'>Read More</a>

                  </div>
                  {/* summary */}
                </div>
              </div>

              <div className='featured-blog-items'>
                <div className='news-snippet'>
                  <a rel='bookmark' className='featured-image'>
                    <img width='300' height='200'
                      src='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/blue-2564660_960_720-300x200.jpg'
                      className='attachment-medium size-medium wp-post-image'
                      srcSet='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/blue-2564660_960_720-300x200.jpg 300w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/blue-2564660_960_720-768x512.jpg 768w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/blue-2564660_960_720-600x400.jpg 600w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/blue-2564660_960_720.jpg 960w'
                      sizes='(max-width: 300px) 100vw, 300px' />
                  </a>

                  {/* summary */}
                  <div className='summary'>
                    <h6 className='category'><a>Uncategorized</a></h6>

                    <h3 className='news-title'><a rel='bookmark'>WordPress Resources at SiteGround</a></h3>

                    <div className='info'>
                      <ul className='list-inline'>
                        <li>
                          <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                            data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                            data-fa-i2svg=''>
                            <path fill='currentColor'
                              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'>
                            </path>
                          </svg>
                          <a>June 21, 2018</a>
                        </li>
                      </ul>
                    </div>

                    <div className='summary-excerpt'>
                      <p>WordPress is an award-winning web software, used by millions of webmasters worldwide for
                        building their website or blog. SiteGround is proud to host this particular WordPress
                        installation and provide users with multiple resources to facilitate the management of their WP
                        websites: Expert WordPress Hosting SiteGround provides superior WordPress hosting focused on
                        speed, security and customer […]</p>

                    </div>


                    <a rel='bookmark' className='readmore'>Read More</a>

                  </div>
                  {/* summary */}
                </div>
              </div>

              <div className='featured-blog-items'>
                <div className='news-snippet'>
                  <a rel='bookmark' className='featured-image'>
                    <img width='300' height='200'
                      src='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2017/11/adult-1867889_960_720-300x200.jpg'
                      className='attachment-medium size-medium wp-post-image' alt=''
                      srcSet='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2017/11/adult-1867889_960_720-300x200.jpg 300w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2017/11/adult-1867889_960_720-768x512.jpg 768w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2017/11/adult-1867889_960_720-600x400.jpg 600w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2017/11/adult-1867889_960_720.jpg 960w'
                      sizes='(max-width: 300px) 100vw, 300px' />
                  </a>

                  {/* summary */}
                  <div className='summary'>
                    <h6 className='category'><a>Lifestyle</a></h6>

                    <h3 className='news-title'><a rel='bookmark'>They are still using those farms</a></h3>

                    <div className='info'>
                      <ul className='list-inline'>
                        <li>
                          <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                            data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                            data-fa-i2svg=''>
                            <path fill='currentColor'
                              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'>
                            </path>
                          </svg>
                          <a>November 21, 2017</a>
                        </li>
                      </ul>
                    </div>

                    <div className='summary-excerpt'>
                      <p>She packed her seven versalia, put her initial into the belt and made herself on the way. When
                        she reached the first hills of the Italic Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road,
                        the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>

                    </div>


                    <a  rel='bookmark' className='readmore'>Read More</a>

                  </div>
                  {/* summary */}
                </div>
              </div>

              <div className='featured-blog-items'>
                <div className='news-snippet'>
                  <a
                    rel='bookmark' className='featured-image'><img width='300' height='200'
                      src='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/fashion-show-1746581_960_720-300x200.jpg'
                      className='attachment-medium size-medium wp-post-image' alt=''
                      srcSet='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/fashion-show-1746581_960_720-300x200.jpg 300w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/fashion-show-1746581_960_720-768x512.jpg 768w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/fashion-show-1746581_960_720-600x400.jpg 600w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/fashion-show-1746581_960_720.jpg 960w'
                      sizes='(max-width: 300px) 100vw, 300px' />
                  </a>

                  {/* summary */}
                  <div className='summary'>
                    <h6 className='category'><a>Design</a></h6>
                    <h6 className='category'><a>Fashion</a></h6>

                    <h3 className='news-title'><a rel='bookmark'>Sport is winning that world</a></h3>

                    <div className='info'>
                      <ul className='list-inline'>
                        <li>
                          <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                            data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                            data-fa-i2svg=''>
                            <path fill='currentColor'
                              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'>
                            </path>
                          </svg>
                          <a>November 21, 2017</a>
                        </li>
                      </ul>
                    </div>

                    <div className='summary-excerpt'>
                      <p>A number of such two-sided contests may be arranged in a tournament producing a champion. Many
                        sports leagues make an annual champion by arranging games.</p>

                    </div>


                    <a rel='bookmark' title='' className='readmore'>Read More</a>

                  </div>
                  {/* summary */}
                </div>
              </div>

              <div className='featured-blog-items'>
                <div className='news-snippet'>
                  <a rel='bookmark' className='featured-image'>
                    <img width='300' height='200'
                      src='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/girl-1252994_960_720-300x200.jpg'
                      className='attachment-medium size-medium wp-post-image' alt=''
                      srcSet='https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/girl-1252994_960_720-300x200.jpg 300w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/girl-1252994_960_720-768x511.jpg 768w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/girl-1252994_960_720-600x399.jpg 600w, https://thebootstrapthemes.com/demo/bootstrap-blog-pro-1/wp-content/uploads/2018/06/girl-1252994_960_720.jpg 960w'
                      sizes='(max-width: 300px) 100vw, 300px' />
                  </a>

                  {/* summary */}
                  <div className='summary'>
                    <h6 className='category'><a>Design</a></h6>
                    <h6 className='category'><a>Lifestyle</a></h6>

                    <h3 className='news-title'><a rel='bookmark'>The copy warned the Little Blind text</a></h3>

                    <div className='info'>
                      <ul className='list-inline'>
                        <li>
                          <svg className='svg-inline--fa fa-clock fa-w-16' aria-hidden='true' data-prefix='far'
                            data-icon='clock' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'
                            data-fa-i2svg=''>
                            <path fill='currentColor'
                              d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'>
                            </path>
                          </svg>
                          <a>November 21, 2017</a>
                        </li>




                      </ul>
                    </div>

                    <div className='summary-excerpt'>
                      <p>Far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean. A small river named Duden flows by their place and supplies it with the
                        necessary regelialia. It is a paradisematic country, […]</p>

                    </div>


                    <a rel='bookmark' title='' className='readmore'>Read More</a>

                  </div>
                  {/* summary */}
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
