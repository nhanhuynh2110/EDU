import _ from 'lodash'

export default (getCtr) => {
  let self = getCtr()

  // self.api.home.on('get-categories', data => {
  //   self.data.setCategories(data.menu)
  // })
  self.api.home.on('get-homepage', (data) => {
    self.data.setCategories(data.categories)
    self.data.setGalleries(data.galleries)
    self.data.setPostmain(data.posts)
  })
}
