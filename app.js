import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { Client } from "@notionhq/client"
import express from 'express'
import cors from 'cors'
const port = 5000
let app = express()
app.use(cors({
    origin: '*'
}));
const notion = new Client({ auth: process.env.NOTION_KEY })
app.get('/getNotionDatabase', (req, res) => {
  notion.databases.query({database_id: process.env.NOTION_DATABASE_ID}).then(response => res.send(response))
})

app.get('ge')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})