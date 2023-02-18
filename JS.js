
let title = document.querySelector('.title');
let turn = 'x';
let items = [];


function lose(){
    
    title.innerHTML = 'Draw';
    setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000);
    
}

function end(num1,num2,num3){
    title.innerHTML = `${items[num1]} winner`;
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';

    setInterval(function(){title.innerHTML +='.'},1000);
    setTimeout(function(){location.reload()},4000);
}

function winner()
{
    for(let i = 1; i<10; i++)
    {
        
       items[i] = document.getElementById('item' + i).innerHTML;
       
       
    }
    
    if(items[1] == items[2] && items[2] == items[3] && items[1] !='')
    {
         end(1,2,3)
    }
    else if(items[4] == items[5] && items[5] == items[6] && items[4] !='')
    {
        end(4,5,6)
    }
    else if(items[7] == items[8] && items[8] == items[9] && items[8] !='')
    {
        end(7,8,9)
    }


    else if(items[1] == items[4] && items[4] == items[7] && items[1] !='')
    {
        end(1,4,7)
    }
    else if(items[2] == items[5] && items[5] == items[8] && items[2] !='')
    {
        end(2,5,8)
    }
    else if(items[3] == items[6] && items[6] == items[9] && items[6] !='')
    {
        end(3,6,9)
    }
    


    else if(items[1] == items[5] && items[5] == items[9] && items[1] !='')
    {
        end(1,5,9)
    }
    else if(items[3] == items[5] && items[5] == items[7] && items[5] !='')
    {
        end(3,5,7)
    }
    
    
   
    

}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '' )
    {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O turn';
    }
    else if(turn === 'o' && element.innerHTML == '' )
    {
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X turn';  
    }

    
   winner();
   if(items.length == 9){
    lose();
   }
   
   

  
    
}
