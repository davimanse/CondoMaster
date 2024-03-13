/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dyhkcxxe",
    "name": "metriQuadri",
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

  // remove
  collection.schema.removeField("dyhkcxxe")

  return dao.saveCollection(collection)
})
