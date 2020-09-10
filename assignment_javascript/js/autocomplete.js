
function billingFunction(){
    if(same.checked){
    //document.getElementsByTagName("fieldset")[1].style.display="none";  
     //billingName.setAttribute('autocomplete',true);
        billingName.removeAttribute('required');   
        billingName.setAttribute('value', document.getElementById("shippingName").value);

        billingZip.removeAttribute('required');     
        billingZip.setAttribute('value', document.getElementById("shippingZip").value);
        
    }else{
       // document.getElementsByTagName("fieldset")[1].style.display="block";
        billingName.setAttribute('required',true);
        billingName.removeAttribute('value');
       
        billingZip.setAttribute('required',true);
        billingZip.removeAttribute('value');
    }
  }