

let btn = document.querySelector('button');

btn.onclick = () => {
    let inp = document.querySelectorAll('.inp')
    let data = {
        username: inp[0].value,
        password: inp[1].value
    }

    fetch("http://localhost:3001/data",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.status === 201){
            alert('success');
        }
    })
    .catch(err => {
        alert(err);
    })
}


//https://ci-cd-insta.netlify.app/



// axios.post()