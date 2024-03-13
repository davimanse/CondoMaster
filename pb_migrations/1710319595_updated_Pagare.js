/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b2d0dlaifvt9zrk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzdzlmum",
    "name": "Quota",
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
  const collection = dao.findCollectionByNameOrId("b2d0dlaifvt9zrk")

  // remove
  collection.schema.removeField("zzdzlmum")

  return dao.saveCollection(collection)
})
