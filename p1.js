const alltik = document.querySelectorAll('.circle')
const inputfield = document.querySelectorAll('input')
const error =document.querySelector('.p2')
const bar=document.querySelector('progress')
 

const allgoals=JSON.parse(localStorage.getItem('data') )|| {}


let countick=Object.values(allgoals).filter((g)=>
    g.completed
)
console.log(countick)



alltik.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        const input =[...inputfield].every(function (intput){
            return intput.value
        })
         
         
        if(input==true){
            error.classList.remove('error')
            const vl=box.parentElement.classList.toggle('com')
            if(vl){
                inputfield.forEach((int)=>{
                    int.setAttribute('readonly',true)
                })
            }
            else{
                inputfield.forEach((int)=>{
                    int.removeAttribute('readonly',true)
                })
            }
            const inpid = box.nextElementSibling.id
            // console.log(allgoals[inpid].completed)
            allgoals[inpid].completed = !allgoals[inpid].completed
            let countick=Object.values(allgoals).filter((g)=>g.completed)
            if(countick.length==1){
                bar.setAttribute('value',32)
            }
            else if(countick.length==2){
                bar.setAttribute('value',62)
            }
            else if(countick.length==3){
                bar.setAttribute('value',100)
            }
            else{
                bar.setAttribute('value',0)
            }
            
            localStorage.setItem('data',JSON.stringify(allgoals))   
        }
        else{
            error.classList.add('error')
        }
        // box.parentElement.classList.toggle('com')
    })
})
inputfield.forEach((int)=>{
    // console.log(allgoals[int.id].name)
    int.value=allgoals[int.id].name
    if(allgoals[int.id].completed){
        int.parentElement.classList.toggle('com')
        // allgoals[int.id].name=e.target.name
        
         
    }
    console.log(countick.length)
    if(countick.length==1){
        bar.setAttribute('value',32)
    }
    else if(countick.length==2){
        bar.setAttribute('value',62)
    }
    else if(countick.length==3){
        bar.setAttribute('value',100)
    }
    else{
        bar.setAttribute('value',0)
    }
      

    int.addEventListener('input',(e)=>{
        
        allgoals[e.target.id]={
            name:e.target.value,
            completed:false
          }
        localStorage.setItem('data',JSON.stringify(allgoals))
    })

})
