
const home = (req, res) => {
    res.render('home.ejs', {'title' : 'home'})
}

export {home}