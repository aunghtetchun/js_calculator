
(function(){

    let screen = document.querySelector('.screen');
    let number_sign = document.querySelectorAll('.number-sign');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    let double=document.querySelector('.double');
    let del_btn=document.querySelector('.del-btn');
    let result=document.querySelector('.result');


    number_sign.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            let old=screen.value;
            let first = old.charAt(0);
            let last_one = old.substr(-1);
            if (first=='\*'|first=='\%'|first=='\/'){
                old.replace(/\+|\-|\*|\%|\/|\./gi, '');
                screen.value=value;
            }else {
                if (last_one==='\*'|last_one==='\+'|last_one==='\-'|last_one==='\%'|last_one==='\/'){
                    if (value==='\*'|value==='\%'|value==='\/'|value==='\+'|value==='\-'){
                        let new_value = old.substring(0, old.length - 1);
                        screen.value=new_value+value;
                    }else {
                        screen.value+=value;
                    }
                }else{
                    screen.value+=value;
                }
            }
        })
    });

    equal.addEventListener('click', function(e){
        let old=screen.value;
        let last_one = old.substr(-1);
        if(screen.value === ''){
            screen.placeholder = 'Please Enter a Value';
        } else {
            if (last_one==='\*'|last_one==='\+'|last_one==='\-'|last_one==='\%'|last_one==='\/') {
                let new_value = old.substring(0, old.length - 1);
                let calculate = eval(new_value);
                result.innerHTML+="<li class=\"list-group-item list-group-item-success\">"+new_value+ ' = '+calculate+"</li>";
                screen.value = calculate;
            }else {
                let calculate = eval(screen.value);
                let answer=screen.value;
                result.innerHTML+="<li class=\"list-group-item list-group-item-success\">"+answer+ ' = '+calculate+"</li>";
                screen.value = calculate;
            }
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = '';
        result.innerHTML='';
    })
    double.addEventListener('click',function (e) {
        if(screen.value === ''){
            screen.placeholder = 'Please Enter a Value';
        } else {
            let str=screen.value;
            let x = str.replace(/\+|\-|\*|\%|\/|\./gi, '');
            let answer=x * x;
            result.innerHTML+="<li class=\"list-group-item list-group-item-success\">"+ x + '*' + x +" = "+answer+"</li>";
            screen.value = answer;
        }
    })
    del_btn.addEventListener('click',function (e) {
        if(screen.value === ''){
            screen.placeholder = 'Please Enter a Value';
        } else {
            let str=screen.value;
            let l=str.length;
            let answer = str.substr(0,l-1);
            screen.value = answer;
        }
    })

})();