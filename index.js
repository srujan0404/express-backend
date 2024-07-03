
const express = require('express');
const app = express();
app.use(express.json());
let courses = [ {
    id: 1,
    name: 'javascript'
}, {
    id: 2,
    name: 'nodejs'
}, {
    id: 3,
    name: 'expressJs'
}, {
    id: 4,
    name: 'reactJs'
}, {
    id: 5,
    name: 'angularJs'
}
];


app.get('/courses', (req, res) => {
    res.json(courses);
})

app.put('/courses/:id', (req, res) => {
    try{
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('Tthe course deosnt exist');
    }
    course.name = req.body.name;
    res.json(course);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.post('/courses', (req, res) => {
    let course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.json(course);
});

app.delete('/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send('The course deosnt exist');
    }
    let index = courses.indexOf(course);
    courses.splice(index, 1);
    res.json(course);
});

function logger(){

}

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})