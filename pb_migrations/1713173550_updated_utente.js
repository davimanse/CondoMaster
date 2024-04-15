/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wo9vr5c1oisdv47")

  collection.name = "Utente"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wo9vr5c1oisdv47")

  collection.name = "utente"

  return dao.saveCollection(collection)
})
