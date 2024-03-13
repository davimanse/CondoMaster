/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1ehajwmgpqe9cqt",
    "created": "2024-03-13 08:29:47.175Z",
    "updated": "2024-03-13 08:29:47.175Z",
    "name": "Spesa",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e3wp2okf",
        "name": "Descrizione",
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
        "id": "vhwf3ni2",
        "name": "Data",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "vn2kc6r3",
        "name": "Saldato",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "ou4sndeg",
        "name": "Tipo",
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
  const collection = dao.findCollectionByNameOrId("1ehajwmgpqe9cqt");

  return dao.deleteCollection(collection);
})
