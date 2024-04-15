/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wo9vr5c1oisdv47")

  // remove
  collection.schema.removeField("wmxzkewl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wo9vr5c1oisdv47")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmxzkewl",
    "name": "Nome",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
