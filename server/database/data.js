import { promises as fs } from 'fs'

export const readData = async () => {
   try {
      const result = await fs.readFile('./data.json')
      const data = JSON.parse(result)

      return data
   } catch (err) {
      console.error(err)
   }
}
