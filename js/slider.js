const slider=document.getElementById("slider");noUiSlider.create(slider,{start:[0,900],connect:!0,range:{min:0,max:1100}});const input1=document.getElementById("input-1"),input2=document.getElementById("input-2"),inputs=[input1,input2];slider.noUiSlider.on("update",(function(e,n){inputs[n].value=Math.round(e[n])}));const setRangeSlider=(e,n)=>{let t=[null,null];t[e]=n,slider.noUiSlider.set(t)};inputs.forEach(((e,n)=>{e.addEventListener("change",(e=>{setRangeSlider(n,e.currentTarget.value)}))}));