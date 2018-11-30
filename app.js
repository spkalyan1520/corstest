var url = `https://tcisf-mapper.flogo.cloud.tibco.com/api`;

function callAPI(){
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        header: new Headers({
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }),
        timeout: 30000,
        body: JSON.stringify({ Source: [
          {
              "type_length": 240,
              "type": "STRING",
              "name": "LastName",
              "label": "Last Name"
          }
      ], Target: [
          {
              "type": "string",
              "label": "Company Name",
              "type_length": 255,
              "name": "company"
          }
      ] })
      })
      .then(response => {
        console.log(response);
        return response.json();
      });
  }
  
  function callMatcher(){
    var strUrl = document.querySelector("#url").value.trim();
    url = strUrl!=''?strUrl:url;
    callAPI().then(data=>{
        document.querySelector("#response").innerHTML = '<div style="margin:20px"><h3>Response:</h3></div><textarea style="width:800px;height:200px;margin:20px;">'+JSON.stringify(data)+'</textarea>';
      }).catch(error => {
        document.querySelector("#response").innerHTML = '<div style="margin:20px"> Error:'+error +' (check Console)</div>';
      });
  }
  
  