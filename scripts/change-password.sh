#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
#ID=2 OLDPW=hannah NEWPW=password TOKEN=BAhJIiVlMDNlNTAyODdjOGJiOGFkYmYxYTBjYzU5NDNkOTRhZAY6BkVG--6caec5deca8c97656803b41f961a581bea4cacb6 scripts/change-password.sh
API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/change-password/$ID"
curl --include --request PATCH "${API}${URL_PATH}" \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLDPW}"'",
      "new": "'"${NEWPW}"'"
    }
  }'

# data output from curl doesn't have a trailing newline
echo
