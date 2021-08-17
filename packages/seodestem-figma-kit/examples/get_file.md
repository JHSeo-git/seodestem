```bash
curl -H 'X-FIGMA-TOKEN: <your-figma-token>' 'https://api.figma.com/v1/files/<your-figma-filekey>'
```

filekey is a part of project url link.
`https://www.figma.com/file/{filekey}/<your-project-name>`

```json
{
  "document": {
    "id": "0:0",
    "name": "Document",
    "type": "DOCUMENT",
    "children": [
      {
        "id": "0:1",
        "name": "Welcome",
        "type": "CANVAS",
        "children": [
          {
            "id": "2:2",
            "name": "Cover",
            "type": "FRAME",
            "blendMode": "PASS_THROUGH",
            "children": [
              {
                "id": "12:2",
                "name": "Welcome",
                "type": "TEXT",
                "blendMode": "PASS_THROUGH",
                "absoluteBoundingBox": {
                  "x": 1039,
                  "y": 621,
                  "width": 301,
                  "height": 72
                },
                "constraints": {
                  "vertical": "TOP",
                  "horizontal": "LEFT"
                },
                "layoutAlign": "INHERIT",
                "layoutGrow": 0,
                "fills": [
                  {
                    "blendMode": "NORMAL",
                    "type": "SOLID",
                    "color": {
                      "r": 1,
                      "g": 1,
                      "b": 1,
                      "a": 1
                    }
                  }
                ],
                "strokes": [],
                "strokeWeight": 1,
                "strokeAlign": "OUTSIDE",
                "effects": [],
                "characters": "Welcome",
                "style": {
                  "fontFamily": "Ubuntu",
                  "fontPostScriptName": "Ubuntu-BoldItalic",
                  "italic": true,
                  "fontWeight": 700,
                  "textAutoResize": "WIDTH_AND_HEIGHT",
                  "fontSize": 72,
                  "textAlignHorizontal": "CENTER",
                  "textAlignVertical": "CENTER",
                  "letterSpacing": 0,
                  "lineHeightPx": 72,
                  "lineHeightPercent": 85.33333587646484,
                  "lineHeightPercentFontSize": 100,
                  "lineHeightUnit": "PIXELS"
                },
                "characterStyleOverrides": [],
                "styleOverrideTable": {}
              }
            ],
            "absoluteBoundingBox": {
              "x": 473,
              "y": 161,
              "width": 1433,
              "height": 992
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "clipsContent": true,
            "background": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 0.1666666716337204,
                  "g": 0.15208333730697632,
                  "b": 0.15208333730697632,
                  "a": 1
                }
              }
            ],
            "fills": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 0.1666666716337204,
                  "g": 0.15208333730697632,
                  "b": 0.15208333730697632,
                  "a": 1
                }
              }
            ],
            "strokes": [],
            "cornerRadius": 20,
            "rectangleCornerRadii": [20, 20, 20, 20],
            "strokeWeight": 1,
            "strokeAlign": "INSIDE",
            "backgroundColor": {
              "r": 0.1666666716337204,
              "g": 0.15208333730697632,
              "b": 0.15208333730697632,
              "a": 1
            },
            "layoutMode": "HORIZONTAL",
            "itemSpacing": 10,
            "counterAxisAlignItems": "CENTER",
            "primaryAxisAlignItems": "CENTER",
            "paddingLeft": 566,
            "paddingRight": 566,
            "paddingTop": 460,
            "paddingBottom": 460,
            "effects": []
          }
        ],
        "backgroundColor": {
          "r": 0.8980392217636108,
          "g": 0.8980392217636108,
          "b": 0.8980392217636108,
          "a": 1
        },
        "prototypeStartNodeID": null,
        "prototypeDevice": {
          "type": "NONE",
          "rotation": "NONE"
        }
      },
      {
        "id": "2:14",
        "name": "Components",
        "type": "CANVAS",
        "children": [
          {
            "id": "2:9",
            "name": "로고_컴포넌트",
            "type": "COMPONENT",
            "blendMode": "PASS_THROUGH",
            "children": [
              {
                "id": "2:12",
                "name": "로고_컴포넌트",
                "type": "FRAME",
                "blendMode": "PASS_THROUGH",
                "children": [
                  {
                    "id": "2:13",
                    "name": "Seo",
                    "type": "TEXT",
                    "blendMode": "PASS_THROUGH",
                    "absoluteBoundingBox": {
                      "x": -89,
                      "y": -39.5,
                      "width": 171,
                      "height": 72
                    },
                    "constraints": {
                      "vertical": "TOP",
                      "horizontal": "LEFT"
                    },
                    "layoutAlign": "INHERIT",
                    "layoutGrow": 0,
                    "fills": [
                      {
                        "blendMode": "NORMAL",
                        "type": "SOLID",
                        "color": {
                          "r": 0.30980393290519714,
                          "g": 0.30980393290519714,
                          "b": 0.30980393290519714,
                          "a": 1
                        }
                      }
                    ],
                    "strokes": [],
                    "strokeWeight": 1,
                    "strokeAlign": "OUTSIDE",
                    "styles": {
                      "fill": "2:6"
                    },
                    "effects": [],
                    "characters": "<S />",
                    "style": {
                      "fontFamily": "Ubuntu",
                      "fontPostScriptName": "Ubuntu-Bold",
                      "fontWeight": 700,
                      "textAutoResize": "WIDTH_AND_HEIGHT",
                      "fontSize": 72,
                      "textAlignHorizontal": "CENTER",
                      "textAlignVertical": "CENTER",
                      "letterSpacing": 0,
                      "lineHeightPx": 72,
                      "lineHeightPercent": 85.33333587646484,
                      "lineHeightPercentFontSize": 100,
                      "lineHeightUnit": "PIXELS"
                    },
                    "characterStyleOverrides": [7, 8, 7, 7, 7],
                    "styleOverrideTable": {
                      "7": {
                        "fontFamily": "Ubuntu",
                        "fontPostScriptName": "Ubuntu-BoldItalic",
                        "italic": true,
                        "fontWeight": 700,
                        "lineHeightPx": 72,
                        "lineHeightPercent": 85.33333587646484,
                        "lineHeightPercentFontSize": 100,
                        "lineHeightUnit": "PIXELS"
                      },
                      "8": {
                        "fontFamily": "Ubuntu",
                        "fontPostScriptName": "Ubuntu-BoldItalic",
                        "italic": true,
                        "fontWeight": 700,
                        "fills": [
                          {
                            "blendMode": "NORMAL",
                            "type": "SOLID",
                            "color": {
                              "r": 0.33725491166114807,
                              "g": 0.800000011920929,
                              "b": 0.9490196108818054,
                              "a": 1
                            }
                          }
                        ],
                        "lineHeightPx": 72,
                        "lineHeightPercent": 85.33333587646484,
                        "lineHeightPercentFontSize": 100,
                        "lineHeightUnit": "PIXELS"
                      }
                    }
                  }
                ],
                "absoluteBoundingBox": {
                  "x": -89,
                  "y": -89,
                  "width": 178,
                  "height": 171
                },
                "constraints": {
                  "vertical": "SCALE",
                  "horizontal": "SCALE"
                },
                "layoutAlign": "INHERIT",
                "layoutGrow": 0,
                "clipsContent": true,
                "background": [],
                "fills": [],
                "strokes": [],
                "strokeWeight": 1,
                "strokeAlign": "INSIDE",
                "backgroundColor": {
                  "r": 0,
                  "g": 0,
                  "b": 0,
                  "a": 0
                },
                "layoutMode": "HORIZONTAL",
                "counterAxisSizingMode": "FIXED",
                "itemSpacing": 10,
                "primaryAxisSizingMode": "FIXED",
                "counterAxisAlignItems": "CENTER",
                "exportSettings": [
                  {
                    "suffix": "",
                    "format": "SVG",
                    "constraint": {
                      "type": "SCALE",
                      "value": 1
                    }
                  }
                ],
                "effects": []
              }
            ],
            "absoluteBoundingBox": {
              "x": -89,
              "y": -89,
              "width": 178,
              "height": 178
            },
            "constraints": {
              "vertical": "TOP",
              "horizontal": "LEFT"
            },
            "clipsContent": false,
            "background": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                }
              }
            ],
            "fills": [
              {
                "blendMode": "NORMAL",
                "type": "SOLID",
                "color": {
                  "r": 1,
                  "g": 1,
                  "b": 1,
                  "a": 1
                }
              }
            ],
            "strokes": [],
            "cornerRadius": 30,
            "rectangleCornerRadii": [30, 30, 30, 30],
            "strokeWeight": 1,
            "strokeAlign": "INSIDE",
            "backgroundColor": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "layoutMode": "HORIZONTAL",
            "counterAxisSizingMode": "FIXED",
            "exportSettings": [
              {
                "suffix": "",
                "format": "PNG",
                "constraint": {
                  "type": "SCALE",
                  "value": 2
                }
              }
            ],
            "effects": []
          }
        ],
        "backgroundColor": {
          "r": 0.8980392217636108,
          "g": 0.8980392217636108,
          "b": 0.8980392217636108,
          "a": 1
        },
        "prototypeStartNodeID": null,
        "prototypeDevice": {
          "type": "NONE",
          "rotation": "NONE"
        }
      }
    ]
  },
  "components": {
    "2:9": {
      "key": "20ca6246cd8d0d864820c13ce07c8ec96be871ad",
      "name": "로고_컴포넌트",
      "description": "",
      "documentationLinks": []
    }
  },
  "schemaVersion": 0,
  "styles": {
    "2:6": {
      "key": "0b204813753574036ac3e9e3bb099463ae15f71f",
      "name": "Gray 2",
      "styleType": "FILL",
      "description": ""
    },
    "2:7": {
      "key": "136de91b4261646cea1c324197ae8f2ba8edabcb",
      "name": "Blue 3",
      "styleType": "FILL",
      "description": ""
    }
  },
  "name": "JHSeo Design System",
  "lastModified": "2021-08-08T10:09:03Z",
  "thumbnailUrl": "https://s3-alpha-sig.figma.com/thumbnails/d0f9cf83-346d-47b7-b9ff-4c3b2460056e?Expires=1629072000&Signature=aYava~yO9eCVYVX2opcnSVnGNKGHbMZ5Yyd-e0gBnrZBP~IqJIBJNTJQI0yEBUxUZ8h8oU8lVH8zH8ehrMLfk2Xa4WT3vlsQ8xeMHnWoK-5plEn-NoFwk8qXmluvIsxHbp9D533IsMVmcYnchOIhBSoRa3oSx9WFJXaytmMU5jF38BrPRVdW~PYF2ylKuF4mkME~yLKz5lqNii8uGL3hG5F8IP5176tACoH9AcCbXDAmVqM5Ryo96n5j5Jt9UGAm~groH63lXGOxZsWpr1uT5xiUsBe-2bJBA0DUk5Y8w-go2o2YBezJtpPCPETBuyonhoJ3NqKx2SEO-Q5015JVng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  "version": "1036046866",
  "role": "owner"
}
```
