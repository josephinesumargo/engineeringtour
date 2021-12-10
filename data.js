var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1691853329974755,
        "pitch": -0.02737477770894614,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": 0.7803434151462074,
          "pitch": -0.11874467148215118,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3214473151965862,
          "pitch": 0.10239350816819837,
          "title": "Faculty of Engineering<br>",
          "text": "Welcome to the Faculty of Engineering!<br>"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.33482438931414293,
        "pitch": -0.056142741291230536,
        "fov": 1.3419674740723089
      },
      "linkHotspots": [
        {
          "yaw": -1.7623027437909435,
          "pitch": 0.001278610612692077,
          "rotation": 5.497787143782138,
          "target": "0-along-engineering-drive-1"
        },
        {
          "yaw": 0.02030326971352281,
          "pitch": -0.0018280137424131482,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium-atrium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.75116845833813,
          "pitch": -0.4947831512202452,
          "title": "Engineering Building<br>",
          "text": "Let's get inside!<br>"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.021057202068917036,
        "pitch": -0.05005631284955925,
        "fov": 0.8755854940535497
      },
      "linkHotspots": [
        {
          "yaw": -0.2527107953463581,
          "pitch": -0.058375837713057876,
          "rotation": 0.7853981633974483,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9134999592843798,
          "pitch": -0.12119027781982084,
          "title": "Engineering Auditorium Atrium<br>",
          "text": "Explore me!<br>"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
