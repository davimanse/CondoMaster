/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "tvlzfdpwkri7w3u",
    "created": "2024-03-12 17:02:05.977Z",
    "updated": "2024-03-12 17:02:05.977Z",
    "name": "Condiminio",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hxnkk1qd",
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
      },
      {
        "system": false,
        "id": "5qbdohuz",
        "name": "Indirizzo",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "chb0bgkz",
        "name": "nAppartamenti",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("tvlzfdpwkri7w3u");

  return dao.deleteCollection(collection);
})
