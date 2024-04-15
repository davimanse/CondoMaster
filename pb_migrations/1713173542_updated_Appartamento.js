/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sklwvdcz",
    "name": "IDUtente",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // remove
  collection.schema.removeField("sklwvdcz")

  return dao.saveCollection(collection)
})
