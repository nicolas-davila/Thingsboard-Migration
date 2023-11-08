let token = msg.payload.token;
let uarms = flow.get("uarms");
let matriz = [];

msg.headers = {
    //'X-Authorization': "Bearer$eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZWluYWxkb0BpZXRlY25vbG9naWEuY29tIiwic2NvcGVzIjpbIlRFTkFOVF9BRE1JTiJdLCJ1c2VySWQiOiI2ZmU4MjQxMC1mMmFkLTExZWEtOTY5Zi05NWRiNWUyMWM1YTIiLCJmaXJzdE5hbWUiOiJSZWluYWxkbyIsImxhc3ROYW1lIjoiQWJyZXUiLCJlbmFibGVkIjp0cnVlLCJpc1B1YmxpYyI6ZmFsc2UsInRlbmFudElkIjoiNjUyY2YyZDAtZjJhZC0xMWVhLTk2OWYtOTVkYjVlMjFjNWEyIiwiY3VzdG9tZXJJZCI6IjEzODE0MDAwLTFkZDItMTFiMi04MDgwLTgwODA4MDgwODA4MCIsImlzcyI6InRoaW5nc2JvYXJkLmlvIiwiaWF0IjoxNjQ2OTQxMjA0LCJleHAiOjE2NDY5NTAyMDR9.2MoQxnse6QHPOsOC14wXoWSR6t4jyjZrwVThuQGF2RNFBjizrF2E5jINakTugvQiu9n0nDRs-cO7BrNgMUM0qw"
'X-Authorization': "Bearer "+token,
//'X-Authorization': "Bearer$"+msg.payload.token,
  //  'accept': 'application/json'
    
}

for(i = 0; i < uarms.length; i++){
    
    const object = {
        ts: uarms[i].ts,
        values: {
            uarms: uarms[i].value,
        }
    } 
    matriz.push(object);
}

// const jsonString = JSON.stringify(matriz);
// const object = JSON.parse(jsonString);

msg.payload = matriz;

return msg;