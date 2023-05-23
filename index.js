const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello Мир')
})
app.get('/users', (req,res) => {
    res.send('["user1", "user2", "user3"]')
})
app.post('/users', (req, res) => {
    res.send('юзер добавлен')
})
app.delete('/users/:id', (req, res) => {
    res.send('юзер с ID :id удален')
})
app.patch('/users/:id', (req, res) => {
    res.send('юзер с ID :id изменен')
})
app.all('/admin', (req, res) => {
    res.send('не хватает прав доступа')
})


app.listen(port, () => [
    console.log(`Example app listening at http://localhost:${port}`)
])