const fs = require('fs')


const catefory = {
    0: 'Underweight',
    1: 'Normal weight',
    2: 'Overweight',
    3: 'Moderately obese',
    4: 'Severely obese',
    5: 'Very severely obese'
}
const risk = {
    0: 'Malnutrition risk',
    1: 'Low risk',
    2: 'Enhanced risk',
    3: 'Medium risk',
    4: 'High risk',
    5: 'Very high risk'
}
try {
    const filePath = `data.json`;
    fs.access(filePath, fs.F_OK, (err) => {
        if (err) {
            console.log(err);
        }
        fs.readFile(filePath, 'utf8', function (err, data) {
            data = JSON.parse(data)
            fs.createWriteStream('output.txt');
            let overweightCount = 0;
            for (let i = 0, len = data.length; i < len; i++) {
                let bmi = data[i].WeightKg / (data[i].HeightCm / 100)
                let x = bmi.toFixed(2)
                switch (true) {
                    case (x < 18.4):
                        row = `${x}\t\t ${catefory[0]}\t\t\t\t ${risk[0]}\n`;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                    case (x < 24.9):
                        row = `${x}\t\t ${catefory[1]}\t\t\t\t ${risk[1]}\n`;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                    case (x < 29.9):
                        row = `${x}\t\t ${catefory[2]}\t\t\t\t\t ${risk[2]}\n`;
                        overweightCount++;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                    case (x < 34.9):
                        row = `${x}\t\t ${catefory[3]}\t\t\t ${risk[3]}\n`;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                    case (x < 39.9):
                        row = `${x}\t\t ${catefory[4]}\t\t\t\t ${risk[4]}\n`;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                    default:
                        row = `${x}\t\t ${catefory[5]}\t\t ${risk[5]}\n`;
                        fs.appendFile('output.txt', row, err => {
                            if (err) throw err;
                        })
                        break;
                }
            }
            fs.appendFile('output.txt', `Total count of overweight people ${overweightCount}`, err => {
                if (err) throw err;
            })
        });
    })
} catch (err) {
    console.log(er);
}