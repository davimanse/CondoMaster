/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bje14ltzlq2trl6",
    "created": "2024-04-10 18:03:30.825Z",
    "updated": "2024-04-10 18:03:30.825Z",
    "name": "Utente",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gjvwczb5",
        "name": "nome",
        "type": "text",
        "required": false,
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
  const collection = dao.findCollectionByNameOrId("bje14ltzlq2trl6");

  return dao.deleteCollection(collection);
})
