/*
先生!
初めて見た授業動画の
停止やスロー再生ができる
ようになる拡張機能作って
校内で配布した場合
問題無いでしょうか？
(スキップ等はできない)
/*

/*
no_comp_link = [] ;

function no_comp_open(){
    //index
    sub_width  = Math.floor( window.parent.screen.width/no_comp_link.length ) ;
    sub_height = window.parent.screen.height - 300 ;
    for( i=0; i<no_comp_link.length; i++ ){
        sub_left = sub_width * i ;
        window.open( no_comp_link[i] , '' , 'width='+sub_width+',height='+sub_height+',top=0,left='+sub_left );
    }
}
*/

//sub_window = 0 ;
write_code = '';

/*
function n(){
    sub_window.close() ;
    location.reload() ;
}
*/

lesson_muted = true ;

/*
function login(){
    console.log(111);
    try{
        if( document.getElementById('index_password').value != '' && document.getElementById('index_loginId').value != '' ) document.getElementById('index').submit() ;
    }catch(e){}
}
*/

if( location.href.indexOf('list') != -1 ){
    if( location.href.indexOf('unit') != -1 ){
        //unit
        movie_list = document.getElementsByClassName('list') ;
        if( document.getElementsByClassName('practicable important')[0] === undefined && location.href.indexOf('&') != -1 ){
            //There is no test
            for( i=0; i<movie_list.length; i++ ){
                if( movie_list[i].getElementsByTagName('a')[0] === undefined ){
                    /*
                    //movie_page    = document.createElement('iframe') ;
                    //movie_page.id  = 'movie_page' ;
                    //movie_page.src = movie_list[i-1].getElementsByTagName('a')[0].href ;
                    //movie_page.style.zIndex = 10 ;
                    //movie_page.style.width  = '60%' ;
                    //movie_page.style.height = '40%' ;
                    //document.body.appendChild( movie_page );

                    sub_height = window.parent.screen.height - 300 ;
                    sub_width  = Math.floor( window.parent.screen.width/5 ) ;
                    movie_size = movie_list[i-1].getElementsByTagName('p')[0].textContent.replace( '\n' , '' ) ;
                    try{
                        if( movie_size.split('間　')[1] !== undefined ){
                            movie_size = movie_size.split('間　')[1];
                        }else{
                            movie_size = movie_size.split('間 ')[1];
                        }
                    }catch(e){
                        movie_size = movie_size.split('間 ')[1];
                    }
                    movie_size = movie_size.split(':');
                    movie_size = parseInt(movie_size[0])*3600 + parseInt(movie_size[1])*60 + parseInt(movie_size[2]) + 1 ;
                    sub_window = window.open( movie_list[i-1].getElementsByTagName('a')[0].href , 'sub' , 'width=' + sub_width + ',height=' + sub_height );
                    */
                    //何故かそのまま移動できない(ログインを要求される)ので↓
                    location.href = movie_list[i-1].getElementsByTagName('a')[0].href + '&' ;
                    /*
                    setTimeout( 'n();' , movie_size * 1000 );
                    */
                    break ;
                }
            }
        }
        all_movie_size = 0 ;
        for( i=0; i<movie_list.length; i++ ){
            movie_size = movie_list[i].getElementsByTagName('p')[0].textContent.replace( '\n' , '' ) ;
            try{
                if( movie_size.split('間　')[1] !== undefined ){
                    movie_size = movie_size.split('間　')[1];
                }else{
                    movie_size = movie_size.split('間 ')[1];
                }
            }catch(e){
                movie_size = movie_size.split('間 ')[1];
            }
            movie_size = movie_size.split(':');
            all_movie_size += parseInt(movie_size[0])*360 + parseInt(movie_size[1])*60 + parseInt(movie_size[2]) ;
        }
        movie_h   = Math.floor( all_movie_size/3600 ) ;
        movie_m   = Math.floor( all_movie_size%3600/60 ) ;
        movie_s   = movie_m % 60 ;
        movie_hms = movie_h + ':' + movie_m + ':' + movie_s ;
        document.getElementById('report_unit_movie').getElementsByTagName('h1')[0].innerHTML = '動画</h1>　' + movie_hms ;
    }else{
        //index
        if( document.getElementsByClassName('normal')[0] !== undefined ){
            list         = document.getElementsByClassName('list') ;
            no_complete  = document.getElementsByClassName('normal') ;
            yes_complete = document.getElementsByClassName('comp') ;
            comp_rate    = Math.floor( yes_complete.length / ( no_complete.length + yes_complete.length ) * 1000 ) / 10 ;
            for( i=0; i<no_complete.length; i++ ){
                if( no_complete[i].getElementsByTagName('a')[0].href != '' ){
                    write_code += no_complete[i].innerHTML + '<hr>' ;
                    // no_comp_link[i] = no_complete[i].getElementsByTagName('a')[0].href ;
                }
            }

            document.getElementById('report_list').getElementsByTagName('h1')[0].textContent = 'レポート　'
                                                                                             + '未:'  + no_complete.length
                                                                                             + ' 完:' + yes_complete.length
                                                                                             + ' 率:' + comp_rate + '%' ;
            list[0].innerHTML = write_code ;
            // document.getElementsByTagName('h1')[1].innerHTML = 'レポート</h1>　<a href="javascript:no_comp_open()">no complete open all</a>'
        }else{
            alert('finish!');
        }
    }
    /*
}else if( location.href.indexOf('https://ww3.tokyo-shoseki.co.jp/api/dwango/requestContents.php?') != -1 ){
    //tokyo-shoseki
    lesson = document.getElementsByTagName('video')[0];
    lesson.style.zIndex = 1 ;
    movie_control = document.createElement('div') ;
    movie_control.id             = 'movie_control' ;
    movie_control.style.position = 'absolute' ;
    //movie_control.style.backgroundColor = rgba(0,0,0,0.5) ;
    movie_control.style.top             = '0px' ;
    movie_control.style.left            = '0px' ;
    movie_control.style.zIndex          = 0 ;
    //movie_control.style.color           = rgba(255,255,255,0.4) ;
    movie_control.innerHTML +='a'
                            + '';
    document.getElementsByTagName('body').item(0).appendChild( movie_control );
}else if(location.href.indexOf('?url=')!=-1 ){
    login() ;
    setInterval('login()',100) ;
}else if(location.href.indexOf('home?')!=-1){
    plans = document.getElementById('plans').getElementsByTagName('dt') ;
    for( i=0; i<plans.length; i++ ){
        window.open( 'https://secure.nnn.ed.jp/' + plans[i].innerHTML.split("'")[1] , '' , 'width=500,height=400' );
    }
    */
}else if( location.href.indexOf('tokyo-shoseki')!=-1 ){
    //tokyo-shoseki
    lesson = document.getElementById('video01');
    lesson.oncanplaythrough = function(){
        if( lesson.controls != true ) lesson.muted = lesson_muted ;
    }
    lesson.onended = function(){
        if( lesson.controls != true ) setTimeout('location.reload()',1000) ;
    }
}else if( location.href.indexOf('movie')!=-1 && location.href.indexOf('w=')==-1 && location.href.indexOf('&')!=-1 ){
    //movie
    /*
    if( location.href.indexOf('tokyo-shoseki')==-1 ){
        //tokyo_shoseki = document.getElementById('tokyo').contentWindow.document.getElementsByTagName('html') ;
        //console.log( tokyo_shoseki );
        if( document.getElementsByTagName('input')[2].value=='確認テスト　＞' ){
            t=document.getElementsByClassName('list-item chapter-active chapter-incomplete ')[0];
            if(t!==undefined){
                t=t.getElementsByClassName('time')[0].innerHTML.split(':');
                for(i=0;i<2;i++)t[i]=parseInt(t[i]);
                m=t[0]*60+t[1]+1;
                setInterval('alert("finish!");',m*1000);
            }
        }
    }
    */
    reload_count = 0 ;
    document.getElementById('tokyo').onload = function(){
        if( location.href.indexOf('&') != -1 && reload_count == 1 ){
            next_button = document.getElementsByClassName('button-right')[0] ;
            if( next_button.getElementsByTagName('input')[0].value == '確認テスト　＞' ){
                alert('finish!');
            }else{
                // location.href = 'https://secure.nnn.ed.jp/' + next_button.innerHTML.split('data-dw-href="')[1].split('"')[0] + '&' ;
                location.href = document.getElementById('breadcrumbs').getElementsByTagName('a')[3].href + '&' ;
            }
        }
        reload_count ++ ;
    }
}

lesson_speed = 1 ;
lesson_paly  = 0 ;

document.onkeyup = function ( evt ) {
    key = evt.which ;
    if( location.href.indexOf('https://ww3.tokyo-shoseki.co.jp/api/dwango/requestContents.php?') != -1 ){
        lesson = document.getElementById('video01');
        switch ( key ){
            case 70 :
                //FullScreen
                lesson.webkitRequestFullscreen();
            break ;
            case 77 :
                //Mute
                lesson.muted = lesson_muted ;
            if( lesson_muted == true ){
                    lesson_muted = false ;
            }else{
                    lesson_muted = true ;
            }
            break ;
            case 32 :
                //S(pace)tart
                if( lesson_paly == 0 ){
                    lesson.pause() ;
                    lesson_paly = 1 ;
                }else{
                    lesson.play() ;
                    lesson_paly = 0 ;
                }
            break ;
            case 84 :
                //Skip
                if( lesson.controls == true ) lesson.currentTime += 10 ;
            break ;
            case 66 :
                //Back
                lesson.currentTime -= 10 ;
            break ;
            default :
            if( key==37 || key==65 ){ // ← A
                lesson_speed -= 0.1 ;
                if( lesson_speed < 0.5 ) lesson_speed = 0.5 ;
            }else if( key==38 || key==87 ){ // ↑ W
                lesson_speed += 0.1 ;
                if( lesson.controls == true ){
                    if( lesson_speed > 2.5 ) lesson_speed = 1.0 ;
                }else{
                    if( lesson_speed > 1.0 ) lesson_speed = 1.0 ;
                }
            }
            break ;
        }
        lesson.playbackRate = lesson_speed ;
    }
}
