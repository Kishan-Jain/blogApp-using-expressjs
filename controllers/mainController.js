
const home = (req, res) => {
    res.render('main/home.ejs', {'title' : 'home'})
}

const about = (req, res) => {
    res.render('main/about.ejs', {'title' : 'about-us'})
}

const faq = (req, res) => {
    res.render('main/faq.ejs', {'title' : 'main/faq'})
}

const features = (req, res) => {
    res.render('main/features.ejs', {'title' : 'features'})
}

export {home, about, faq, features}