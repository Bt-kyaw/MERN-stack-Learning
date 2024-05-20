const fs = require('fs')

const readStream = fs.ReadStream('./docs/large.txt');
const writeStream = fs.WriteStream('./docs/large-write.txt');

// readStream.on('data',(data) => {
//     writeStream.write(data.toString())
//     writeStream.write('-----chunk------')
// })

  readStream.pipe(writeStream)