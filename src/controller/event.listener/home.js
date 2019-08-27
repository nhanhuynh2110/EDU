import _ from 'lodash'

export default (getCtr) => {
  let self = getCtr()
  self.api.home.on('get-homepage', (data) => {
    self.data.setPostmain(data.posts)
  })
}
