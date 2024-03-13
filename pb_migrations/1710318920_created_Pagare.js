/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "b2d0dlaifvt9zrk",
    "created": "2024-03-13 08:35:20.579Z",
    "updated": "2024-03-13 08:35:20.579Z",
    "name": "Pagare",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ajuipfqr",
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
        "id": "azmzkziy",
        "name": "Pagato",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "dvas18wr",
        "name": "IDSpesa",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "1ehajwmgpqe9cqt",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "fa3sddcj",
        "name": "IDAppartamento",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "y6jdlsb8hrxyrie",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("b2d0dlaifvt9zrk");

  return dao.deleteCollection(collection);
})
