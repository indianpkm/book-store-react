import fs from 'fs'
import BookModel from '../modal/BookModel.js';

export const saveData = (req, res) => {
    fs.readFile('./data/allBook.json', 'utf-8', async (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const dataArray = JSON.parse(data);

        // for upload data in mongodb cloud
        try {
            const data = await BookModel.find()
            if (data.length) {
                res.send('Data already saved in database')
            } else {
                await BookModel.insertMany(dataArray)
                res.send(data)
                console.log(dataArray.length + ' data saved successfully')
            }
        } catch (err) {
            res.send(err)
            console.log(err)
        }
    });
}