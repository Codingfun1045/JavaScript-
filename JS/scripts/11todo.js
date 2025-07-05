const newArray=[{
  name: 'make dinner',
  dateToday: '2025-05-31',
  },
  {
    name: 'wash dishes',
    dateToday: '2025-05-31'
  }];

getArrayValue();

function getArrayValue(){
  let todoHTML='';
  for(let i=0;i<newArray.length;i++){
    const todoObject=newArray[i];
    const {name,dateToday}=todoObject;
    console.log(name);
    console.log(dateToday);
    const html=`<div>${name}</div> 
    <div>${dateToday}</div>
    <button class='js-delete' onclick="
    newArray.splice(${i},1);
    getArrayValue();
    ">Delete</button>`;
    todoHTML+=html;
  }

  document.querySelector('.container').innerHTML=todoHTML;
}

function addList(){
  const newValue=document.querySelector('.getValue');
  const inputValue=newValue.value;
  const newDateValue=document.querySelector('.getDate');
  const newDate=newDateValue.value;
  
  newArray.push({
    name:inputValue,
    dateToday:newDate}
  );
  newValue.value='';

  getArrayValue();
}

function checkEnter(event){
  if(event.key==='Enter'){
    addList();
  }
}