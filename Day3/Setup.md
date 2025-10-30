# Node.js Installation Setup
Install Node JS from it's website & make sure npm is also installed properly
    To check use command ``` node -v ``` & ```npm -v```

# Setup of React Frontend App

1. Make Sure Node JS is installed, to check: Open terminal and type
```node -v```, it'll show the current version of Node JS installed on the system.

2. Create a Folder
3. Open that folder in terminal
4. Enter command ``` npm create vite@latest ```
5. Select React and then Javascript, and keep all the settings default and hit enter.
6. On successfull setup we'll see a url ```localhost:5173```


# Setup of Node - Express Backend

1. Create a Folder.
2. Open that folder in terminal.
3. Enter command ``` npm init -y```
4. You'll see a file named package.json
5. Create a file named ``` index.js ``` in the same folder
6. Edit package.json and in the scripts section add command ``` "start" : "node index.js" ```

7. Save the file
8. In ``` index.js ``` add code sample

``` 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

9. Open terminal and install express using the command ``` npm install express ```

10. Run the app using the command ``` npm start ```
11. If everything is setup correctly you'll see 
``` Example app listening on port 3000 ```


