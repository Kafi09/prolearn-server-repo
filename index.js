const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const course = require('./data/learn.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/courses-category', (req, res) => {
    res.send(courses);
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(course);
    }
    else {
        const category_course = course.filter(n => n.category_id === id);
        res.send(category_course);
    }
})

app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('server running', port);
    // console.log(`Example app listening on port ${port}`)
});