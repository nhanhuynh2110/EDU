import Category from './category'
import Home from './home'
import List from './list'

export default () => {
  return {
    category: new Category(),
    home: new Home(),
    list: new List()
  }
}
