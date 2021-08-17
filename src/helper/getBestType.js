 export const getBestType = (names) => {
    let maxVal = 0
    let bestType = ""
    let appearances = {}
    
    for (let type of names) {
      if (appearances[type]) {
        appearances[type]++
        if (appearances[type] > maxVal) {
          maxVal = appearances[type]
          bestType = type
        }
      } else {
        appearances[type] = 1
      }
    }
    return bestType
  }