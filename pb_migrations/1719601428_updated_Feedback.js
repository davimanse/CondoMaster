/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rs5hhqzptsfwfvl")

  // remove
  collection.schema.removeField("lof3yrc1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ewguk5vx",
    "name": "IdUtente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "za1qp85pbyy8ojo",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rs5hhqzptsfwfvl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lof3yrc1",
    "name": "IdUtente",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wo9vr5c1oisdv47",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("ewguk5vx")

  return dao.saveCollection(collection)
})
