const Connexion = require('../../models/Connexion');

module.exports = (app) => {
  app.get('/api/connexions', (req, res, next) => {
    Connexion.find()
      .exec()
      .then((connexion) => res.json(connexion))
      .catch((err) => next(err));
  });

  app.post('/api/connexions', function (req, res, next) {
    const connexion = new Connexion();

    connexion.save()
      .then(() => res.json(connexion))
      .catch((err) => next(err));
  });

  app.delete('/api/connexions/:id', function (req, res, next) {
    Connexion.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

};
