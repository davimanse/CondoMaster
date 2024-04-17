/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5m7vrlu",
    "name": "Piano",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "j5m7vrlu",
    "name": "Codice",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
