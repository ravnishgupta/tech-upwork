//Allow only logged in users to view pages
const auth = (req, res, next) => {
    if(!req.session.user_id)
    {
        res.redirect('/login');
    }
    else{
        next();
    }
}

module.exports = auth;