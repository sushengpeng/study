define({ "api": [
  {
    "type": "POST",
    "url": "http://127.0.0.1:8000/login/",
    "title": "登录操作",
    "version": "0.0.1",
    "name": "login",
    "group": "User",
    "description": "<p>这里可以描述一下这个函数的具体操作</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "msg",
            "description": "<p>简略描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success:",
          "content": "HTTP 1.1/ 200K\n{\n    'status': 0,\n    'msg': 'success'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Fail:",
          "content": "HTTP 1.1/ 404K\n{\n    'status': 0,\n    'msg': 'Fail'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/commen_controller.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "http://localhost:3000/testPost/",
    "title": "测试",
    "version": "0.0.1",
    "name": "testPost",
    "group": "User",
    "description": "<p>测试</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "msg",
            "description": "<p>简略描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Success:",
          "content": "HTTP 1.1/ 200K\n{\n    'status': 0,\n    'msg': 'success'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Fail:",
          "content": "HTTP 1.1/ 404K\n{\n    'status': 0,\n    'msg': 'Fail'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "controllers/commen_controller.js",
    "groupTitle": "User"
  }
] });
