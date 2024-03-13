/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y6jdlsb8hrxyrie",
    "created": "2024-03-13 08:25:45.118Z",
    "updated": "2024-03-13 08:25:45.118Z",
    "name": "Appartamento",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("y6jdlsb8hrxyrie");

  return dao.deleteCollection(collection);
})
