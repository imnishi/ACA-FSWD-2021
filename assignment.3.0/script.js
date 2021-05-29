//get_token end point
document.getElementById("firstbtn").addEventListener("click",getToken)

function myDisplayer(some) {
    document.getElementById("tokenhere").innerHTML = some;
  }

async function getToken()
{
    let token = await fetch('http://127.0.0.1:12345/get_token');
    let ans = await token.text();
    myDisplayer(ans);
}

//register end point
document.getElementById("secondbtn").addEventListener("click",register)

async function register()
{
    var formdata = {
      "username" : document.getElementById("name").value,
      "data" : document.getElementById("data").value,
      "token" : document.getElementById("token").value
    }

    let response = await fetch('http://127.0.0.1:12345/register',{
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formdata)
    });

    console.log(response);

    if(response.ok){
      alert('you are successfully registered');
    }
    else{
      alert('you have not been registered due to some error')
    }
}

register.catch(error =>{
    console.log(error);
});

//get_data end point
document.getElementById("thirdbtn").addEventListener("click",getData)
async function getData()
{
    var givetoken = {
        "token": document.getElementById("token2").value
    }

    let response_data= await fetch('http://127.0.0.1:12345/get_data',{
        method:"POST",
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(givetoken)
    });

    let output= await response_data.text();

    if(response_data.ok){
        document.getElementById("output").innerHTML=output;
    }
}    