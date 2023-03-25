/**
 * This file is part of MonitoraPA
 *
 * Copyright (C) 2023 Giacomo Tesio <giacomo@tesio.it>
 *
 * MonitoraPA is a hack. You can use it according to the terms and
 * conditions of the Hacking License (see https://monitora-pa.it/LICENSE.txt)
 */
function linkTo(aTag, target){
    if(!aTag.href.endsWith("/")){
        aTag.href += "/";
    }
    if(target.startsWith("/")){
        target = target.substr(1);
    }
    aTag.href += target;
}
function initPage(){
    if(window.location.hash && window.location.hash.length > 1){
        var target = window.location.hash.replace(/^#/,'');
        var proxyLink = document.getElementsByClassName('proxy-link');
        for(var i = 0; i < proxyLink.length; ++i){
            linkTo(proxyLink[i], target)
        }
        var surveillanceLink = document.getElementsByClassName('surveillance');
        for(var i = 0; i < surveillanceLink.length; ++i){
            linkTo(surveillanceLink[i], target)
        }
    }
}

initPage()