var searchlist = (function() {
    var self = this;
    return {
    init: function(data){
        var elem = document.getElementById(data.insertIdHere);
        var listdata = data.listdata;
        if(elem){
            elem.innerHTML = `<div class="listparent"><input type="text" id="${data.id}" name="${data.name}" placeholder="${data.placeholder}" class="searchList"></div>`;
            elem.insertAdjacentHTML('beforeend', '<div class="listcontainer noshow"></div>');
            var listcontainer = document.getElementsByClassName('listcontainer')[0];
            listdata.forEach(function(key){
                listcontainer.insertAdjacentHTML('beforeend',`<div class="listeach">${key.name}</div>`);
            });

        var inputElem = document.querySelectorAll('.listparent input');
        var listEachFilter =  document.querySelectorAll('.listcontainer .listeach');   

            inputElem[0].addEventListener('input', function(e){
                var inputVal = inputElem[0].value.toLowerCase();
                    listcontainer.classList.remove('noshow');
                if(inputVal.length < 2){
                    listEachFilter.forEach(function(key){
                        key.classList.remove('nomatch');
                    });
                    if(inputVal.length == 0){
                        listcontainer.classList.add('noshow');
                    }
                    return false;
                } 

                listEachFilter.forEach(function(key){
                    key.classList.remove('nomatch');
                    if(!(key.innerText).toLowerCase().startsWith(inputVal)){
                        key.classList.add('nomatch');
                    }

                    key.addEventListener('click', function(e){
                        inputElem[0].value = this.innerText;
                        listcontainer.classList.add('noshow');
                    })
                });


            });
        }
    }
    }
  })();
  