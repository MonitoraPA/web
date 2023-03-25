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
    aTag.href += target;
}
function initYouTubePage(){
    if(window.location.hash && window.location.hash.length > 1){
        var target = "watch" + window.location.hash.replace(/^#/,'?');
        var invidiousLinks = document.getElementsByClassName('invidious-link');
        for(var i = 0; i < invidiousLinks.length; ++i){
            linkTo(invidiousLinks[i], target)
        }
        var youtubeLinks = document.getElementsByClassName('youtube');
        for(var i = 0; i < youtubeLinks.length; ++i){
            linkTo(youtubeLinks[i], target)
        }
    }
}

initYouTubePage()