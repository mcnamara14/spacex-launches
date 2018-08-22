export const mockLaunchData = [{
    "flight_number": 1,
    "mission_name": "FalconSat",
    "upcoming": false,
    "launch_year": "2006",
    "launch_date_unix": 1143239400,
    "launch_date_utc": "2006-03-24T22:30:00.000Z",
    "rocket": {
        "rocket_name": "Falcon 1",
        "rocket_type": "Merlin A",
        "first_stage": {
            "cores": [
                {
                    "reused": false,
                    "land_success": false,
                }
            ]
        },
    },
    "reuse": {
        "core": false,
        "side_core1": false,
        "side_core2": false,
        "fairings": false,
        "capsule": false
    },
    "links": {
        "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
        "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
        "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
        "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
        "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88"
    },
    "details": "Engine failure at 33 seconds and loss of vehicle"
  },
  {
  "flight_number": 2,
  "mission_name": "FalconSun",
  "upcoming": false,
  "launch_year": "2008",
  "launch_date_unix": 1143239500,
  "launch_date_utc": "2008-03-24T22:30:00.000Z",
  "rocket": {
    "rocket_name": "Falcon 2",
    "rocket_type": "Merlin B",
    "first_stage": {
        "cores": [
            {
                "reused": true,
                "land_success": false,
            }
        ]
    },
  },
  "reuse": {
    "core": false,
    "side_core1": false,
    "side_core2": false,
    "fairings": false,
    "capsule": false
  },
  "links": {
    "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
    "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
    "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
    "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88"
  },
  "details": "Engine failure at 33 seconds and loss of vehicle"
}];

export const cleanMockLaunchData = [{
    "article": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html", 
    "badge": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", "date": "03/24/2006", 
    "details": "Engine failure at 33 seconds and loss of vehicle", 
    "id": 1, 
    "landSuccess": false, 
    "name": "Falcon 1", 

    "reddit": false, 
    "reused": false, 
    "type": "Merlin A"
    }, 
    {
    "article": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html", 
    "badge": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png", "date": "03/24/2008", 
    "details": "Engine failure at 33 seconds and loss of vehicle", "id": 2, 
    "landSuccess": false, 
    "name": "Falcon 2", 
    "reddit": false, 
    "reused": false, 
    "type": "Merlin B"
}]