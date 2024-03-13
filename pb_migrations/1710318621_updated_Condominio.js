/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7uiwalbt",
    "name": "IDSpesa",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1ehajwmgpqe9cqt",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // remove
  collection.schema.removeField("7uiwalbt")

  return dao.saveCollection(collection)
})
