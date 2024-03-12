/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1rs5gn3z",
    "name": "Indirizzo",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5nagl3mm",
    "name": "nAppartamenti",
    "type": "number",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // remove
  collection.schema.removeField("1rs5gn3z")

  // remove
  collection.schema.removeField("5nagl3mm")

  return dao.saveCollection(collection)
})
