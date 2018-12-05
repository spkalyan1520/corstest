var url = `https://tcisf-mapper.flogo.cloud.tibco.com/api`;
var body  = '{}';
function callAPI(){
    return fetch(url, {
        mode: 'cors',
        method: 'POST',
        header: new Headers({
            // 'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json'
        }),
        timeout: 30000,
        body: JSON.stringify(body)
    })
    .then(response => {
    console.log(response);
    return response.json();
    });
  }
  
  function callMatcher(){
    var strUrl = document.querySelector("#url").value.trim();
    var strBody = JSON.parse(document.querySelector("#request_body").value.trim());
    if(!strUrl){
        alert('Please enter url');
        return;
    }else if(!strBody){
        alert('Please enter POST Body');
    }else{
        url = strUrl;
        body = strBody;
    }
    callAPI().then(data=>{
        document.querySelector("#response").innerHTML = '<div style="margin:20px"><h3>Response:</h3></div><textarea style="width:800px;height:200px;margin:20px;">'+JSON.stringify(data)+'</textarea>';
      }).catch(error => {
        document.querySelector("#response").innerHTML = '<div style="margin:20px"> Error:'+error +' (check Console)</div>';
      });
  }
  
  