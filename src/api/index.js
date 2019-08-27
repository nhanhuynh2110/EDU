import Category from './category'
import Home from './home'

export default () => {
  return {
    category: new Category(),
    home: new Home()
  }
}
