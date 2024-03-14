/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7mom7mmx",
    "name": "IDAdmin",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // remove
  collection.schema.removeField("7mom7mmx")

  return dao.saveCollection(collection)
})
