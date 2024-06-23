const login = (req, res) => {
    res.render('profile/login.ejs', {'title' : 'login page'});
};

const register = (req, res) => {
    res.render('profile/register.ejs', {'title' : 'register page'});
};

const profile = (req, res) => {
    res.render('profile/profile.ejs', {'title' : 'profile page'});
};

export {login, register, profile}
