# tgenie-backend

Authentication
--------------

[GET] /api/v1/deployment/user/:userId/token - returns token

[GET] /api/v1/deployment/user/renew - returns renewed token

Get User Info
--------------

[GET] /api/v1/deployment - returns user data

Predictions
-----------

[POST] /api/v1/agent/session - creates a new session

[POST] /api/v1/agent/session/:sessionId/completions - returns completion

Postman collections
https://github.com/Shansabry/tgenie-backend/tree/main/postman_collections
