/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebpqz8jt",
    "name": "Nome",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ebpqz8jt",
    "name": "Nome",
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

  return dao.saveCollection(collection)
})
