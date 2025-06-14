import express from "express"

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready")
// });

app.get("/kaushit", (req,res) =>{
    res.send("kaushik is dogsh*t at valorant")
});

app.get("/api/jokes", (req,res)=>{
    const jokes = [
        {
            id : 1,
            title : 'Joke 1',
            content : 'This is the first joke'
        },

        {
            id : 2,
            title : 'Joke 2',
            content : 'This is the second joke'
        },

        {
            id : 3,
            title : 'Joke 3',
            content : 'This is the third joke'
        }
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(` Serve at http://localhost:${port}`);
});