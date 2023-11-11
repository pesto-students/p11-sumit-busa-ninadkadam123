const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url}`
  );
  next();
});

app.get('/tasks', (req, res) => {
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return { err: err };
    }

    res.send(JSON.parse(data));
  });
});

app.get('/tasks/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('tasks.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return { err: err };
    }
    data = JSON.parse(data);
    let responsedata = data.filter((dat) => {
      return dat.id == id;
    });

    console.log(responsedata);
    res.send(responsedata);
  });
});

app.put('/tasks/:id', (req, res) => {
  const id = req.params.id;

  if (req.body == null) {
    return res.sendStatus().json({
      status: 'data required',
    });
  }

  const { title, description, completed } = req.body;

  fs.readFile('./tasks.json', (error, data) => {
    if (error) {
      console.log(error);
    }

    const parseData = JSON.parse(data);

    let idoc = true;
    parseData.forEach((task) => {
      if (id == task.id) {
        idoc = false;
        task.title = title;
        task.description = description;
        task.completed = completed;
      }
    });

    if (idoc) {
      return res.send({
        status: 'No Task found with Id',
      });
    }

    fs.writeFile(
      './tasks.json',
      JSON.stringify(parseData, null, 2),
      (error) => {
        if (error) {
          console.log('An error ocuured writing to the file', error);
        }

        return res.send({
          status: 'Task updates successfully',
        });
      }
    );
  });
});

app.post('/tasks', (req, res) => {
  if (req.body == null) {
    return res.sendStatus().json({
      status: 'data required',
    });
  }

  const { title, description, completed } = req.body;

  fs.readFile('./tasks.json', (error, data) => {
    if (error) {
      console.log(error);
    }

    const parseData = JSON.parse(data);
    let id = uuidv4();
    parseData.push({
      id: id,
      title: title,
      description: description,
      completed: completed,
    });
    fs.writeFile(
      './tasks.json',
      JSON.stringify(parseData, null, 2),
      (error) => {
        if (error) {
          console.log('An error ocuured writing to the file', error);
        }

        return res.send({
          status: 'Task added successfully',
        });
      }
    );
  });
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;

  fs.readFile('./tasks.json', (error, data) => {
    if (error) {
      console.log(error);
    }

    const parseData = JSON.parse(data);
    let updatedlist = parseData.filter((tasks) => {
      return tasks.id != id;
    });
    if (parseData.length == updatedlist.length) {
      return res.send({
        status: 'No Task found with Id',
      });
    }
    fs.writeFile(
      './tasks.json',
      JSON.stringify(updatedlist, null, 2),
      (error) => {
        if (error) {
          console.log('An error ocuured writing to the file', error);
        }

        return res.send({
          status: 'Task deleted successfully',
        });
      }
    );
  });
});

app.use((req, res, next) => {
  res.status(404).send(`${req.url} Not Found`);
  next();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
