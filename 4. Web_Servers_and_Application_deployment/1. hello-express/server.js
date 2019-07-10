const express = require('express');

const app = express();

app.get('/' , (req,res)=>{
  //res.send("Hello Node-Express!"); // sending plain text
  //res.send('<h1>HELLO EXPRESS</h1>'); // sending HTML content
  res.send({                            // sending json data
    name : 'Reflex',
    Age : '20',
    Likes : [
      'Cricket',
      'Coding',
      'gaming'
    ]
  });

  app.get('/about' , (req,res)=>{
    res.send('About Page ');
  });

  app.get('/contact' , (req,res)=>{
    res.send('<h1><strong>CONTACT US</strong> </h1>');
  });

  // Bad error message
  app.get('/bad' , (req,res)=>{
    res.send({
      errormessage : "Unable to connect"
    });
  })

});



app.listen(3000);