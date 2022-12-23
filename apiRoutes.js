const router = require ('express').Router()
const fs = require ('fs')
let dbStore = require ('./db/db.json')

// base url for this file is local host 3001/api
router.get('/notes', (req,res) => {
  res.json(dbStore) 
})

router.post('/notes', (req,res)=> {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.random()
  }
  dbStore.push(newNote)
  fs.writeFileSync('./db/db.json', JSON.stringify(dbStore))
  res.json(dbStore)
})

// router.delete("/notes/:id", (req, res) => {
//     // iterate over db store with filter or for loop and push notes that do 
//     // not match req.params.id into new array of notes to keep. Set dbstore = to notes to keep array

// // this will rewrite new state of dbstore array and send changes as response to front end
// fs.writeFileSync("./db/db.json", JSON.stringify(dbStore));
// res.json(dbStore);
// });


module.exports = router 