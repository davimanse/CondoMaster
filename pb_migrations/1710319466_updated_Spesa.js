/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1ehajwmgpqe9cqt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ararf6sv",
    "name": "Importo",
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
  const collection = dao.findCollectionByNameOrId("1ehajwmgpqe9cqt")

  // remove
  collection.schema.removeField("ararf6sv")

  return dao.saveCollection(collection)
})
