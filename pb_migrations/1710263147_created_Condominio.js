/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e78ny62u6j55jwm",
    "created": "2024-03-12 17:05:47.188Z",
    "updated": "2024-03-12 17:05:47.188Z",
    "name": "Condominio",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e78ny62u6j55jwm");

  return dao.deleteCollection(collection);
})
