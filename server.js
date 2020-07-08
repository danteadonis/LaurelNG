
const express= require('express');
const app= express();

app.use(express.static('./dist/laurel-ng'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/laurel-ng/'});
}).listen(process.env.PORT || 8080);

