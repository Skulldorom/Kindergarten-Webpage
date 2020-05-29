$( document ).ready(function() {
    start_slide();

});

index = 0;

function start_slide(){
    urllist = ["https://st.depositphotos.com/2309453/2616/i/950/depositphotos_26160821-stock-photo-painted-hands.jpg",
    "https://st2.depositphotos.com/1037987/10617/i/450/depositphotos_106172730-stock-photo-teacher-helping-kids.jpg",
    "https://static4.depositphotos.com/1000877/298/i/950/depositphotos_2987366-stock-photo-child-painting-in-the-kindergarten.jpg",
    "https://static8.depositphotos.com/1337688/981/i/950/depositphotos_9818583-stock-photo-five-children-lying-on-the.jpg",
    "https://st2.depositphotos.com/1037987/10617/i/950/depositphotos_106174374-stock-photo-teacher-reading-book-with-class.jpg"]

    setTimeout(function () {
        console.log('Running loop '+index)
        
        change_bk(urllist[index])

        index+=1

        if(index>=urllist.length){
            index=0;
        }
        start_slide();
    }, 5000);
        
}

function change_bk(element){    
    $('#slideshow').css('background-image','url('+element+')');      
}
