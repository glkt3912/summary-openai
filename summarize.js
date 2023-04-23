import { Configuration, OpenAIApi } from "openai"
import readline from "readline"
import fs from "fs"
import crypto from "crypto"

const outputFile = `./output/output-${crypto.randomBytes(8).toString('base64').slice(0, 8)}.md`;
const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}))

userInterface.question("ファイルパスを入力してください: ", async (filePath) => {
  const inputText = await new Promise((resolve, reject)　=> {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err)
      } else {
        console.log(`入力ファイル：${filePath}`)
        resolve(data)
      }
    })
  })

  if (!filePath) {
    console.log("ファイルパスが入力されていません")
    return
  }
  
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helphul assistant"},
      { role: "user", content: `この文章をMarkdown形式で要約してください。 ${inputText}`},
    ]
  })
  const surmmary = res.data.choices[0].message.content

  const outputText = await fs.writeFile(outputFile, surmmary, (err) => {
    if (err) {
      console.log(err)
    } else [
      console.log(`ファイル ${outputFile} に書き込みました`)
    ]
    userInterface.close()
  })
})
