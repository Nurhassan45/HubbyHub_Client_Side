
import './App.css'

function App() {
let a={name:'Rabbi'};
fetch('https://server-site-bay.vercel.app/test',
  {
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(a)
  }
).then(res=>res.json()).then(data=>console.log(data))
  return (
   <>
  
  </>
  )
}

export default App
