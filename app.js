//init github
const github=new  Github;

//init UI
const ui=new UI;

//get serchUser
const searchUser=document.getElementById('searchUser');

//add event listner
searchUser.addEventListener('keyup',(e)=>{
    //get input text
    const userText=e.target.value;

    if(userText !=''){
        //make http call
        github.getUser(userText)
        .then(data=>{
            console.log(data);
           if(data.profile.message===''){
               //show alert
           }
           else{
               //show profile
               ui.showProfile(data.profile);
           }
        })
    }else{
        //clear profile
    }
});