/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "al5zbaah",
    "name": "IDCondominio",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e78ny62u6j55jwm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // remove
  collection.schema.removeField("al5zbaah")

  return dao.saveCollection(collection)
})
