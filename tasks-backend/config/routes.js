module.exports = app => {
    const {
        user
    } = app.api

    app.post('/signup', user.save)
}
