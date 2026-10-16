const http = require('http')

const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port 
const ingredients = [
  { name: 'strawberries', amount: 2, unit: 'cups' },
  { name: 'sugar', amount: 0.5, unit: 'cups' },
  { name: 'flour', amount: 2, unit: 'cups' },
  { name: 'butter', amount: 6, unit: 'tbsp' }
]

const used = [false, false, false, false]

function pickIngredient() {
  const start = Math.floor(Math.random() * ingredients.length)
  for (let i = 0; i < ingredients.length; i++) {
    const index = (start + i) % ingredients.length  
    if (!used[index]) {
      used[index] = true
      return { index: index, item: ingredients[index] }
    }
  }
  return null   
}

    res.end('</body></html>')
  } else {
    res.statusCode = 404
    res.end()
  }
})
