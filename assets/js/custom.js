const bgOverlay = document.querySelector('#bg-overlay');

const implimentWithjs = document.querySelector('#implimentwithjs');


function generationgShop() {

    return implimentWithjs.innerHTML = shopItems.map((q)=>{

        let {id, image, cardTitle, totalPrice, salePrice} = q;

            return  `
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6" id="product-id-${id}">
            <div class="card">
                <img src=${image} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${cardTitle}</h5>
                    <p class="card-text">
                        $ ${totalPrice}
                        <span>$ ${salePrice}</span>
                    </p>
                    <a href="#" class="btn btn-primary">shop now</a>
                </div>
            </div>
        </div>
            `

    }).join('');
    
}

generationgShop();














// for the opwn form and overlay
// login-click function with overlay   
// and
// for the login forn click function with js

const loginClick = document.querySelector('#login-click');
const loginForm = document.querySelector('#login-form');

loginClick.addEventListener('click',function () {
    // console.log("log in bnt is in working with js")
        bgOverlay.classList.add('overl-open');
        loginForm.classList.add('logibform-open');

});


// for the close form and btn

const formClosebtn = document.querySelector('#form-close-btn');

formClosebtn.addEventListener('click', function () {
    bgOverlay.classList.remove('overl-open');
    loginForm.classList.remove('logibform-open');
})











const headerTop = document.querySelector('.header-top');
const mainButtomheader = document.querySelector('#main-buttom-header');
const filterIcon = document.querySelector('#filter-Icon');
const filterClose = document.querySelector('#filter-close');

const mainBody = document.querySelector('#main-body');

// for the open btn function in js

const mobonavBar = document.querySelector('#mobo-navBar');

mobonavBar.addEventListener('click',function () {
    console.log("this is open btn")

    if(headerTop.classList.contains('open')){
        mobonavBar.classList.remove('open-close')
    }else{
        headerTop.classList.add('open');
        mainButtomheader.classList.add('open-close');
        bgOverlay.classList.add('overl-open');
    }
})




// for the close bnt in js function
const cloaseBtn = document.querySelector('#cloase-btn');
cloaseBtn.addEventListener('click', function(){
    console.log("Hello colse btn")  

    if (headerTop.classList.contains('open')) {
        headerTop.classList.remove('open');
        mainButtomheader.classList.remove('open-close');
        bgOverlay.classList.remove('overl-open');
    } else {
        cloaseBtn.classList.add('open-close');
    }
})



// for the open-filter functionin js


const forResponsiveFilter = document.querySelector('#forResponsiveFilter')
filterIcon.addEventListener('click', function () {
    if(mainBody.classList.contains('bodyMain')){
        headerTop.classList.remove('bodyMain');
        forResponsiveFilter.classList.remove('filerToggleIcon');
        
    }else{
        mainBody.classList.add('bodyMain');
        forResponsiveFilter.classList.add('filerToggleIcon');  
        bgOverlay.classList.add('overl-open');  
    }
})


// for the close-filter functionin js

filterClose.addEventListener('click', function(){
    if(mainBody.classList.contains('bodyMain')){
        mainBody.classList.remove('bodyMain');

        forResponsiveFilter.classList.remove('filerToggleIcon');
        bgOverlay.classList.remove('overl-open');
        
    }else{
        mainBody.classList.add('bodyMain');
        forResponsiveFilter.classList.add('filerToggleIcon');    
    }
})
