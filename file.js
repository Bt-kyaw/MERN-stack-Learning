const fs = require('fs')

// fs.readFile('./docs/creativecoder.txt',(err,data) => {
//     if(err){
//       console.log(err);
//     }
//      console.log(data.toString());
//      console.log('After Reading Files');
//   })

// if(!fs.existsSync('./docs/creativecoder123.txt')){
//     fs.writeFile('./docs/creativecoder123.txt','Hello Sir',(err) => {
//         if(err){
//           console.log(err);
//         }
//         console.log('Writing files completed !');
//       })    

// }else{
//     fs.unlink('./docs/creativecoder123.txt', (err) => {
//         if(err){
//             console.log(err);
//         }
//             console.log('File Deleted');
//     })
// }

if(!fs.existsSync('./khinmyatnoe')){
    fs.mkdir('./khinmyatnoe',(err) => {
        if(err){
         console.log(err);
        }
         console.log('Folder Created');
     })
}else {
    fs.rmdir('./khinmyatnoe', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder Deleted');
    })
}

  console.log('Leatest line of code');