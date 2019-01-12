module.exports = app => {
    const {
        user,
        auth,
    } = app.api

    app.post('/signup', user.save)
    app.post('/signin', auth.signin)
}
