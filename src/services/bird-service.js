import birdsData from './bird-data'

export default class BirdService {
  getBirds(id) {
    if(id < birdsData.categories.length) {
      const newCategory = birdsData.categories[id]
      const newBirdsData = birdsData[newCategory].map((item) => {
        item.isAnswered = false
        return item
      })
      return newBirdsData;
    } else {
      return null
    }
  }

  getRandomBird(id) {
    const currentBirdsData = this.getBirds(id)
    if (currentBirdsData) {
      return currentBirdsData[Math.floor(Math.random() * currentBirdsData.length)]
    } else {
      return null
    }
  }

  getCategories() {
    return birdsData.categories
  }
}