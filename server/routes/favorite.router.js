const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT id, url, category FROM favorites ORDER BY id DESC;`;
  pool
    .query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log("Error completing SELECT favorite query", err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const newFavorite = req.body.images.downsized.url;
  console.log("req.body is:", newFavorite);

  const queryText = `INSERT INTO favorites ("url") VALUES ($1)`;
  pool
    .query(queryText, [newFavorite])
    .then(() => {
      res.sendStatus(201);
    })
    .catch(err => {
      console.log("Error completing INSERT INTO query", err);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put(`/:favId`, (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  let queryText = `UPDATE "favorites" SET "category" = $1 WHERE "id" = $2`;
  pool
    .query(queryText, req.body)
    .then(result => {
      res.sendStatus(200);
    })
    .catch(error => {
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete("/:id", (req, res) => {
  const queryText = `DELETE FROM favorites WHERE id=$1`;
  pool
    .query(queryText, [req.params.id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log(
        "error completeing SELECT plant query in server side DELETE",
        error
      );
      res.sendStatus(500);
    });
});

module.exports = router;
