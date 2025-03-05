const klaraRoute = (req, res) => {
    res.send("Klara Briggs");
  };

  const dalinRoute = (req, res) => {
    res.send("Dalin Briggs");
  };

  const henryRoute = (req, res) => {
    res.send("Henry Briggs");
  };

module.exports = {
    klaraRoute,
    dalinRoute,
    henryRoute
  };