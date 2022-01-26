// adding a event listner on button

document.querySelector('button').addEventListener('click',change)


function change(){


    const arrayOfValues = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F']
    let color = '#'
    
    //loop for generating random numbers btw 0 to 15 
    // so we can grab a random value from the array to make the random color code #FFFFFF


    //outer loop runs 6 times to generate 6 random values
    for(let i = 0 ; i < 6 ; i++  ){

        //inner while loop make sure that the random no must be in btw 0 to 15
    
        while(true){
    
            let randomNum = Math.floor(Math.random(0,1)*100)
            
            // if random num is >= 16 , generate again

            if(randomNum >= 16){
                continue
            }
            else{
                color += arrayOfValues[randomNum]  //else grab a random value from the array and add to the color
                break
            }
    
        }
    
        
    
    }


    //changing the color of background
    document.querySelector('body').style.background = color

    //placing the value in the h2
    document.querySelector('#colorCode').innerText = `${color}`
    // console.log(color);



}