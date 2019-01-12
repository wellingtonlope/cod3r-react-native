module.exports = app => {
    const {
        user,
        auth,
        task,
    } = app.api

    const {
        authenticate
    } = app.config.passport

    app.post('/signup', user.save)
    app.post('/signin', auth.signin)

    app.route('/tasks')
        .all(authenticate())
        .get(task.getTasks)
        .post(task.save)

    app.route('/tasks/:id')
        .all(authenticate())
        .delete(task.remove)

    app.route('/tasks/:id/toggle')
        .all(authenticate())
        .put(task.toggleTask)

}
