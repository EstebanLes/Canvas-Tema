function importarJavascript(nombre) {

    $.getScript(nombre, function () {
        console.log("Js " + nombre + " cargado");
    });
}
importarJavascript("https://content.lameca.com.ar/estilos/aplv_2022/aplv_2022.js"); // 09-06-22
importarJavascript("https://s3.us-east-1.amazonaws.com/content.lameca.com.ar/Innovacion/Seminario-final/semfinal.js"); // 09-06-22
importarJavascript("https://content.lameca.com.ar/Javascript/acordeon.js");
importarJavascript("https://content.lameca.com.ar/Javascript/canvas_profile_badges.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_avon.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_CEPAS.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_LIGA.js");
importarJavascript("https://content.lameca.com.ar/Javascript/TELECOM.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_CNH.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_FEHGRA.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_FIAT.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_WESTERN.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_MACRO.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_ALICAN.js");
importarJavascript("https://content.lameca.com.ar/Javascript/JS_SUPERCANAL.js");
importarJavascript("https://content.lameca.com.ar/Javascript/js_canvas20.js");
importarJavascript("https://content.lameca.com.ar/Javascript/programa2.0estilo.js");
importarJavascript("https://content.lameca.com.ar/Javascript/js_tfg_modulos.js");
importarJavascript("https://content.lameca.com.ar/Javascript/pag_inicio.js");
importarJavascript("https://content.lameca.com.ar/Javascript/eligetuaventura_script.js");
//importarJavascript("https://content.lameca.com.ar/Javascript/eligetuaventura_scriptmobile.js");
importarJavascript("https://content.lameca.com.ar/Javascript/script-bandersmacro.js");
importarJavascript("https://content.lameca.com.ar/Javascript/programagenerico.js");
importarJavascript("https://content.lameca.com.ar/Javascript/cierregire.js");
importarJavascript("https://content.lameca.com.ar/Javascript/Programa.js");
importarJavascript("https://content.lameca.com.ar/Javascript/genericoscript.js");
importarJavascript("https://content.lameca.com.ar/Javascript/aula-grado2020.js");
importarJavascript("https://content.lameca.com.ar/Javascript/deloitescript.js");
importarJavascript("https://content.lameca.com.ar/Javascript/documentacion_script.js");
importarJavascript("https://content.lameca.com.ar/Javascript/preguntas_frecuentes.js");
importarJavascript("https://content.lameca.com.ar/Javascript/recorrido.js");
importarJavascript("https://meca.ues21.edu.ar/programa_nuevo/scripts/programa_2020.js");
importarJavascript("https://content.lameca.com.ar/estilos/blenderizacion_landing/js/script.js");
importarJavascript("https://www.googletagmanager.com/gtag/js?id=G-89E48RDCSE");
importarJavascript("https://content.lameca.com.ar/Javascript/opcion3-beta.js");

importarJavascript("https://content.lameca.com.ar/estilos/imagenes_css/grado/script_de_remplazo_grado.js");


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-89E48RDCSE');

<!-- Hotjar Tracking Code for https://siglo21.instructure.com/ -->

    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:1619340,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');


var imagenes_a_cambiar = $(".lightbox_pant_prin > img");
// imagenes_a_cambiar es un array de 16 elementos

for (var i = 0; i < imagenes_a_cambiar.length; i++) {
imagenes_a_cambiar[i].src = "https://content.lameca.com.ar/Innovacion/imagennueva2021/x.png";
}


/* lo que sigue es para el aula abierta de la materia 2.0 */
$(".bntMenu").attr("style","width:40px !important;margin-top:-40px!important;background-image: url(https://content.lameca.com.ar/Javascript/imenu3.png) !important;height:40px !important;background-repeat: no-repeat !important;background-position: center !important")
$(".btnsMods").attr("style","height:35% !important; right:-1200px!important;width:100% !important; ")

$("#wiki_page_show .page-title").hide()
$(document).ready(function(){ $("#master-modal").css({ "width":"80%", "left":"10%" }) });
importarJavascript("https://content.lameca.com.ar/Javascript/acordeon.js");
importarJavascript("https://content.lameca.com.ar/Javascript/canvas_profile_badges.js");

var w = $(window).width(); if (w < 600) {     var style_ = `         <style>         .btnsMods{ width:90% !important; height: 100px!important; background-color:#fff!important; }          </style>`;     $("body").append(style_); }

var style=`<style>
.btnsMods{
width:100% !important;
background-color:#fff!important;
height: 300px!important;
}

}
.btnMenu{
width:40px !important;
background:#672A80;
width:50px !important;
height:30px !important;
right: -740px !important;
}
.bntMenu {
    background-image: url(https://content.lameca.com.ar/Javascript/imenu3.png) !important;
    width: 32px;
    height: 16px;
    margin: 0px 0px 0px 0px;
    float: right !important;
    background-repeat: no-repeat;
    cursor: pointer;
    margin-top: -20px !important;
}



</style>`
$("body").append(style);


/* <script type="application/javascript" src="https://cdn.agentbot.net/core/ad709055c9d332dce42967fefa9f3f62.js" async></script>*/
$('#footer-links').html(
    '<a target="_blank" href="http://www.21.edu.ar/" class="external">' +
    '<span>Siglo 21</span>' +
    '<span class="ui-icon ui-icon-extlink ui-icon-inline" title="Enlace a sitio externo."></span>' +
    '</a>' +
    '<a target="_blank" href="http://ues21.socialgateway.net/webchat/alumnos/ping?style=ues21classic&tag=Proyecto%20Canvas" class="external">' +
    '<span>Ayuda</span>' +
    '<span class="ui-icon ui-icon-extlink ui-icon-inline" title="Enlace a sitio externo."></span>' +
    '</a>');

$('.ic-app-footer__links a').show();

/* Ejemplo para inhibir todos los puntos de ayuda */
$('.ic-app-header__secondary-navigation a#global_nav_help_link').click(function () {
    //working as of 08/19/2016
    function onElementRendered(selector, cb, _attempts) {
        var el = $(selector);
        _attempts = ++_attempts || 1;

        if (el.length) return cb(el);
        if (_attempts == 60) return;

        setTimeout(function () {
            onElementRendered(selector, cb, _attempts);
        }, 250);
    };

    onElementRendered('#help_tray', function (e) {
        // if there is the role of student or user and no presence of teacher or admin, hide links
        // if (ENV.current_user_roles.indexOf('student') > 0 || ENV.current_user_roles.indexOf('user') > 0 &&
        //  !(ENV.current_user_roles.indexOf('admin') < 0 || ENV.current_user_roles.indexOf('teacher') < 0)) {

        $('.ic-NavMenu-list-item a[href="#create_ticket"]').parent().hide();
        $('.ic-NavMenu-list-item a[href="https://community.canvaslms.com/community/ideas/feature-ideas"]').parent().hide();
        $('.ic-NavMenu-list-item a[href="https://community.canvaslms.com/community/answers/guides/"]').parent().hide();
        $('.ic-NavMenu-list-item a[href="http://apis.ilumno.com/faqs/v1.0/portal?source=ues"]').parent().hide();
        $('.ic-NavMenu-list-item a[href="https://community.canvaslms.com/community/answers"]').parent().hide();
        // }
        // else {
        //  console.log('else statement');
        // }
    });
});

if ((ENV['current_user'].id < 1000000000) || (ENV['current_user'].id == 46480000000001060) || (ENV['current_user'].id == 46480000000000013)) {
  if (inIframe()) {
    console.log('#########################---------entrando en Frame!!!!-------##########################');
  }else{
    console.log('#########################---------logo por fuera!!!!-------##########################');
    ! function (b) {
        var g = "$aivo",
            h = !!window.$aivo && window.$aivo;
        b[g] = b[g] || {
            next: null,
            init: function (j) {
                var m, p = document.getElementsByTagName("head")[0],
                    q = document.createElement("script"),
                    u = "_agentCoreScript",
                    w = window;
                q.onload = q.onerror = q.onreadystatechange = function () {
                    if (!(q.readyState && !/^c|loade/.test(q.readyState) || m)) {
                        if (q.onload = q.onreadystatechange = null, m = 1, h = w[g], h) w[g] = h;
                        else try {
                            delete w[g]
                        } catch (x) {
                            w[g] = void 0
                        }
                        b[g] = h, setTimeout(function () {
                            $aivo.run(j, $aivo.__next)
                        }, 1)
                    }
                }, document.getElementById(u) && document.getElementById(u).parentNode.removeChild(document.getElementById(u)), q.async = 1, q.id = u, q.src = "https://cdn.agentbot.net/core/latest/core.js", q.charset = "UTF-8", p.parentNode.insertBefore(q, p)
            },
            ready: function (j) {
                $aivo.__next = j
            }
        }
    }(this);
    $aivo.init("ad709055c9d332dce42967fefa9f3f62");
    $aivo.ready(function () {
        $aivo.user.set('name', ENV['current_user'].display_name);
        $aivo.user.set('email', ENV['current_user'].id);
    });
}
}

// Actualizacion dinamica de los enlaces al sitio de realidad virtual
function redirectHREF() {
    try {
        var
        envUserId = ENV['current_user'].id,
        envUserName = ENV['current_user'].display_name,
        envCourseId = ENV['COURSE_ID'],
        envCourseName = ENV['ROOT_OUTCOME_GROUP'].title,
        envAssignmentId = ENV['ASSIGNMENT_ID'],
        urlRV1 = $("#boton1").parents("a").attr("href"),
        urlRV2 = $("#boton2").parents("a").attr("href"),
        paramRV1 = "&user_id=@user_id&course_id=@course_id&assignment_id=@assignment_id&user_fullname=@user_name&course_name=@course_name";
        paramRV2 = "?user_id=@user_id&course_id=@course_id&assignment_id=@assignment_id";

        if(envAssignmentId != null){
            paramRV1 = paramRV1.replace("@user_id",envUserId);
            paramRV1 = paramRV1.replace("@course_id",envCourseId);
            paramRV1 = paramRV1.replace("@assignment_id",envAssignmentId);
            paramRV1 = paramRV1.replace("@user_name",encodeURI(envUserName));
            paramRV1 = paramRV1.replace("@course_name",encodeURI(envCourseName));
            $("#boton1").parents("a").attr("href", urlRV1+paramRV1);

            paramRV2 = paramRV2.replace("@user_id",envUserId);
            paramRV2 = paramRV2.replace("@course_id",envCourseId);
            paramRV2 = paramRV2.replace("@assignment_id",envAssignmentId);
            $("#boton2").parents("a").attr("href", urlRV2+paramRV2);
        }
    } catch (error) {
        console.log(error);
    }

}
redirectHREF();


function inCourse() {
    let courseId = null;
    try {
        var root = window.location.href;
        /**
         * dividimos la url por la palabra curso
         */
        var uri = root.split("/courses/");

        if (uri.length > 1) {
            //
            //courseId = uri[1].split("/")[0];
            /**
             * obtenemos el id del curso desde la variable ENV
             */
            if (ENV != null && ENV.COURSE_ID) {
                courseId = ENV.COURSE_ID;
            }
            /**
             * si no exite la variable (foros) se toma
             * la url del navegador
             */
            if (courseId == null) {
                courseId = uri[1].split("/")[0];
            }
        }
    } catch (error) {
        doCatch(error);
    }
    return courseId;
}

function removeCloneContentExternal(callBack, src = null) {
    try {
        const isCanvas = new RegExp("instructure.com");
        if (!isCanvas.test(src)) {
            callBack();
            return false;
        }
        let ifr = $("#MainPopupIframe").contents();
        const discussions_ = ifr.find(".side_comment_discussion").length;
        const groups_ = ifr.find(".section a[href*=groups]").length;
        const $iframes = ifr.find("iframe");
        $iframes.css({
            "width": "100%",
            "height": "90vh"
        });

        if (groups_ > 0) {
            ifr.find("#courseMenuToggle").trigger("click");
        } else {
            ifr.find("#wrapper").css({
                "margin-left": "0",
                "max-width": "initial"
            });
            ifr.find("#main").css("margin-left", "0px");
            ifr.find("#left-side").hide();
        }
        /**
         * ocultamos el menu
         */

        ifr
            .find(
                "#header,.header-bar-outer-container,.page-title,.ic-app-nav-toggle-and-crumbs"
            )
            .hide();
        /**
         */
        ifr.find(".module-sequence-footer").remove();
        /**
         * enviamos a 0 la altura del popup
         */
        $("#MainPopupIframe").css("height", "90vh");
        var sizer = ifr.find("#application").css("height");
        if (sizer > 0) {
            $("#MainPopupIframe").css("height", sizer);
        }
        ifr.find("#application").css({
            height: "100px",
            overflow: "auto",
            "min-height": sizer + "px"
        });


        if (ifr.find("#wiki_page_show").length < 1) {
            ifr.find("#wrapper").css({
                "padding": "20px"
            });
        }
        var auto =0;
        var refreshIntervalId = setInterval(function(){
            auto++;
            $("#MainPopupIframe")
            .contents()
            .find("#aivochat-launcher")
            .hide();
            if(auto==10){
                clearInterval(refreshIntervalId);
            }
        }, 1000);

        callBack();
    } catch (error) {
        doCatch(error);
    }
}


function isScormInsideOfIframe() {
    let response = false;
    try {
        const $mainPopupIframe = $("#MainPopupIframe");
        if ($mainPopupIframe != null && $mainPopupIframe.length > 0) {
            let ifr = $mainPopupIframe.contents();
            if (ifr.find("form :first-child").length > 0) {
                let action = ifr.find("form").attr("action");
                if (action != null && action.length > 0) {
                    if (/scone-prod/.test(action)) {
                        response = true;
                    }
                }
            }
        }
    } catch (error) {
        doCatch(error);
    }
    return response;
}

/**
 * funcion que se encarga de validar que un scorm se encuentre dentro del iframe.
 */
function actionWhenScorm() {
    try {
        if (isScormInsideOfIframe()) {
            let ifr = $("#MainPopupIframe").contents();
            /* $(".MainPopupIframeClass").removeAttr("id")
                  $(".MainPopupIframeClass").contents().find("iframe").attr("id","MainPopupIframe"); */
            ifr.find(".assignment-title,#right-side-wrapper").hide();
            ifr.find("#application").css("overflow", "hidden");
            ifr.find("#content").css("padding", "0px");
            console.log('#########################----------scorm-----##########################');
        }
    } catch (error) {
        doCatch(error);
    }
}

var firefoxReload = 0;
/**
 * funcion que se encarga de recargar el iframe cuando el navegador es firefox, debido a que tiene un bug que no carga el modal como en chrome o mozilla
 */
function reloadIfFirefox() {
    if (firefoxReload > 0) {
        return false;
    }
    if (isScormInsideOfIframe()) {
        return false;
    }
    setTimeout(() => {
        var isChrome =
            /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        if (isChrome) { } else if (isFirefox) {
            $("#MainPopupIframe").attr("src", $("#MainPopupIframe").attr("src"));
            firefoxReload++;
        } else { }
    }, 2000);
}

var calendarReload = 0;
/**
 * la carga en el popup del calendario de canvas
 */
function reloadIfCalendar() {
    try {
        if (calendarReload > 0) {
            return false;
        }
        //const iframeUri=$("#MainPopupIframe").attr("src");
        const $mainPopupIframe = $("#MainPopupIframe");
        const regExpCalendar = /.com\/calendar/;
        if (regExpCalendar.test($mainPopupIframe.attr("src"))) {
            $mainPopupIframe
                .attr("src", $mainPopupIframe
                    .attr("src")
                );
            calendarReload++;
        }
    }
    catch (error) {
        doCatch(error);
    }

}

/**
 * esta funcion se encarga de abrir el modal
 */
function openModal(contentx = null) {
    if (contentx != null && contentx != "") {
        $(".thirdWhite")
            .fadeIn()
            .html(contentx);
    }
    $(".blackx,.whitex,.backdrop").fadeIn();

    $("body").addClass("hide-overflow");
}


/**
 * esta funcion se encarga de cerrar el modal
 */
function closeModal() {
    try {
        if (previsualice != null && previsualice != true) {
            $(".thirdWhite")
                .fadeOut()
                .html("");
        }
    }
    catch (error) {
        doCatch(error);
    } finally {
        $(".blackx,.whitex,.backdrop").fadeOut();
        $("body").removeClass("hide-overflow");
        firefoxReload = 0;
    }
}

/**
 * metodo que se encarga de revisar que el usuario logueado tiene rol tutor, no tiene en cuenta si
 * es administrador, unicamente tutores reales
 */
function isOnlyTutor() {
    var response = false;
    try {
        const hasTutorRol = ENV.current_user_roles.indexOf("teacher");
        const hasUserRol = ENV.current_user_roles.indexOf("user");
        const hasAdminRol = ENV.current_user_roles.indexOf("admin");
        const hasStudentRol = ENV.current_user_roles.indexOf("student");
        if (
            hasUserRol >= 0 && //si tiene rol usuario y
            hasTutorRol >= 0  //si tiene rol tutor
        ) {
            if (
                (
                    hasAdminRol < 0 /* &&
                    hasStudentRol < 0 */
                )
            ) {
                response = true;
            }
        }
    }
    catch (error) {
        doCatch(error);
    }
    return response;
}

/**
 * metodo que controla que la pagina actual pertenezca a un curso
 */
function isInCourse() {
    let response = false;
    try {
        if (/courses\/\d/.test(window.location.href)) {
            response = true;
        }
    } catch (error) {
        doCatch(error);
    }
    return response;
}

function showMainPopupIframe() {
    $("#MainPopupIframe").fadeIn();
}

/**
 * metodo que permite crear un iframe usando jquery

 */
function createIframeJquery(href) {
    let response = {};
    try {
        response = $('<iframe/>', {
            id: 'MainPopupIframe',
            class: 'MainPopupIframeClass',
            src: href,
            style: 'width:100%; border:none;height:90vh',
            scrolling: 'no',
            load: function () {
                try {
                    removeCloneContentExternal(function () {
                        actionWhenScorm();
                        $('.secondWhite').fadeOut();
                        $('.thirdWhite').fadeIn();
                    }, href);
                    reloadIfFirefox();
                    reloadIfCalendar();
                    showMainPopupIframe();
                } catch (error) {
                    doCatch(error);
                }
            },
        });
    }
    catch (error) {
        doCatch(error);
    }
    return response;
}

/**
 *  retorno de pagina cargada dentro de un iframe
 */
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

/**
 * funcion que retorna el modal
 * */
function modal() {
    return `
            <div class='blackx'>
                <div id='master-modal' class='whitex overflow white-responsive'>
                    <button type='button' class='close' data-dismiss='modal'>Cerrar</button>
                    <a href="#">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAZElEQVR42mNgoCnQ8JMD4ggcWIZ89RCB/zhwCBaDiVRPJ4N7wJIILI3FYBk0Nf3EGBxCRhxFDB+DZfCGKWGDKdM/CqhWVshQT/9oBsEh0U9GeTxxQItNqhqMXr6SWh6H0K2sAAAMi8oxynPzgwAAAABJRU5ErkJggg==" style="position:relative;display:block;right:0;margin: 0px 5px;margin-top: 5px;width:20px" id="full" />
                        </a>
                    <div class='secondWhite'><img src='https://content.lameca.com.ar/Javascript/loading.gif' /></div>
                    <div class='thirdWhite' id='thirdWhite' style='display:none'></div>
                </div>
            </div>
            <div class='backdrop'></div>`;
}


function doCatch(message) {
    console.log(message);
}

/**
 * metodo que valida que el usuario logueado sea un estudiante
 */
function isStudent() {
    var response = false;
    if (
        ENV.current_user_roles.indexOf("student") > 0 ||
        (ENV.current_user_roles.indexOf("user") > 0 &&
            !(
                ENV.current_user_roles.indexOf("admin") < 0 ||
                ENV.current_user_roles.indexOf("teacher") < 0
            ))
    ) {
        response = true;
    }
    return response;
}

/**
 * funcion que se encarga de tomar todo el ancho dela pantalla en canvas.
 */
function wrapperFull() {
    var css = `<style>
                            body:not(.full-width):not(.outcomes) .ic-Layout-wrapper {
                                max-width: initial !important;
                            }
                        </style>`;
    $("head").append(css);
}

/**
 * metodo que se encarga de eliminar el boton de restablecer el curso cuando se trata de un rol tutor
 */
function removeRebuildCourseTutor() {
    try {
        if (
            ENV.current_user_roles.indexOf("teacher") > 0 ||
            (ENV.current_user_roles.indexOf("teacher") > 0 &&
                !(ENV.current_user_roles.indexOf("admin") < 0))
        ) {
            $(".reset_course_content_button").remove();
        }
    } catch (error) { }
}

/**
 * quitar restablecer curso
 */
function removeRebuildCourse() {
    try {
        $(".reset_course_content_button").remove();

    } catch (error) { }
}

/**
 * enviar el mensaje dentro canvas
 * al asistente de profesor.
 */
function hideMessageToTeacherAssistance() {
    try {
        if (isStudent()) {
            const style = `
            <style>
                li[data-id*="tas"] {
                    display: none;
                }
            </style>
            `;
            $("head").append(style)
        }
    } catch (error) {
        doCatch(error);
    }
}
/**
 * Pagina de inicio
 * cuando el usuario tiene rol tutor.
 */
function removeInitialPage() {
    try {
        const i = isInCourse();
        if (isOnlyTutor() && i != null & i) {
            $(".choose_home_page_link").remove();
        }
    } catch (error) {
        doCatch(error);
    }
}

/**
 * metodo de chat
 * de siglo cuando esta logueado un estudiante y cuando
 * la pagina se carga mediante lightbox.
 */
function hideStudentHelper() {
     setTimeout(() => {
         try {
             console.log('#########################---------executing-------##########################');
            if (inIframe()) {
                 console.log('#########################---------hiding teach 21-------##########################');
                console.log($("#MainPopupIframe").contents().find("head"));
               console.log($("#MainPopupIframe").contents().find("#AgentAppContainer"));
                $("#MainPopupIframe")
                    .contents()
                    .find("#aivochat-launcher")
                    .hide()
                $("#aivochat-launcher").hide();
             }
         }
         catch (error) {
             doCatch(error);
         }
     }, 1000);
}

/**
 * metodo que se encarga de agregar un mensaje personalizado cuando se presenta un error
 * @param {element} $(".submit_error_link.discussion-topic") elemento que representa el boton de abrir el formulario de soporte canvas
 */
function error404() {
    $(document).ready(function () {
        var links = $(".icon-discussion.submit_error_link.discussion-topic");
        if (links.length > 0) {
            links.remove();
            var customErrorMessage = `
            <div>
                <h1></h1>
            </div>
            `;
            $("#submit_error_form").before(customErrorMessage);
            $("#submit_error_form").remove();
        }
    });
}

/**
 * Metodo que permite ocultar el titulo del curso si se encuentra la clase .studentTitleHide
 */
function checkIfStudentTitle() {
    const $requestWrapperFull = $(".studentTitleHide");
    try {
        if ($requestWrapperFull.length > 0 && isStudent()) {
            $(".header-bar-outer-container").remove();
        }
    }
    catch (error) {
        doCatch(error);
    }
}

/**
 * menu lateral en mobile
 */
function modalStyles() {
    return `<style>
    .blackx {
        display: none;
        overflow: auto;
        position: fixed;
        opacity: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: 9998;
    }



    .white-answer,
    .whitex {
        text-align: center;
        display: none;
        background: #f5f5f5;
        position: relative;
        top: 5px;
        left: 10%;
        width: 80%;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 9999;
        transition: .5s;
        -webkit-transition: .5s;
        min-height: 20px;
        padding: 0px;
        margin-bottom: 5px;
        border: 0px solid #e3e3e3;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05)
    }

    .whitex .close {
        background: #182B51;
        color: white;
        padding: 0px 5px;
        margin: 5px;
        border-radius: 22px;
        position: relative;
        right: 0%;
        display: block;
        /* float: right; */
    }

    #full {
        float: left;
        margin: 0px 5px;
        margin-top: 5px;
    }

    .thirdWhite {
        /* line-height: 0; */
    }

    .backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: black;
        display: none;
        opacity: .5;
        z-index: 999;
    }

    .historyBack {
        cursor: pointer;
    }

    .btnsMods {
        width: 100% !important;
        background-color: #fff !important;
        height: 300px !important;
    }

    div.col div.bntMenu {
        display: none;
    }

    /*  COLUMN SETUP  */
    .col {
        display: block;
        float: left;
        /*margin: 1% 0 1% 1.6%;*/
    }

    .col:first-child {
        margin-left: 0;
    }

    /*  GROUPING  */
    .group:before,
    .group:after {
        content: "";
        display: table;
    }

    .group:after {
        clear: both;
    }

    .group {
        zoom: 1;
        /* For IE 6/7 */
    }

    /*  GRID OF EIGHT  */
    .span_8_of_8 {
        width: 100%;
    }

    .span_7_of_8 {
        width: 87.5%;
    }

    .span_6_of_8 {
        width: 75%;
    }

    .span_5_of_8 {
        width: 62.5%;
    }

    .span_4_of_8 {
        width: 50%;
    }

    .span_3_of_8 {
        width: 37.5%;
    }

    .span_2_of_8 {
        width: 25%;
    }

    .span_1_of_8 {
        width: 12.5%;
    }

    .span_12_of_12 {
        width: 100%;
    }

    .span_11_of_12 {
        width: 91.66%;
    }

    .span_10_of_12 {
        width: 83.33%;
    }

    .span_9_of_12 {
        width: 75%;
    }

    .span_8_of_12 {
        width: 66.66%;
    }

    .span_7_of_12 {
        width: 58.33%;
    }

    .span_6_of_12 {
        width: 50%;
    }

    .span_5_of_12 {
        width: 41.66%;
    }

    .span_4_of_12 {
        width: 33.33%;
    }

    .span_3_of_12 {
        width: 25%;
    }

    .span_2_of_12 {
        width: 16.66%;
    }

    .span_1_of_12 {
        width: 8.333%;
    }

    @media only screen and (max-width: 1100px) {

        .span_1_of_8,
        .span_2_of_8,
        .span_3_of_8,
        .span_4_of_8,
        .span_5_of_8,
        .span_6_of_8,
        .span_7_of_8,
        .span_8_of_8 {
            width: 100%;
        }

        .span_1_of_12,
        .span_2_of_12,
        .span_3_of_12,
        .span_4_of_12,
        .span_5_of_12,
        .span_6_of_12,
        .span_7_of_12,
        .span_8_of_12,
        .span_9_of_12,
        .span_10_of_12,
        .span_11_of_12,
        .span_12_of_12 {
            width: 100%;
        }

    }

    @media only screen and (max-width: 1100px) {
        .btnsMods {
            height: 400px !important;
        }

        div.col div.bntMenu {
            display: block;
        }
    }


    @media only screen and (max-width: 1100px) {
        .btnsMods {
            z-index: 900;
            background-color: #f0f8ff;
            position: absolute;
            height: 100%;
            padding: 30px;
            right: -350px;
        }
    }
</style>`;
}

/**
 * funcion que permite toma el 100% del ancho.
 */
function ifPageFull() {
    try {
        if (/\/pages\//.test(window.location.href)) {
            wrapperFull();
        }
    } catch (error) {
        doCatch(error);
    }
}

/**
 * funcion pagina url a cargar con el modal
 */
$(document).on('click', '.toModal,.tinyModalOpen', function (event) {
    try {
        const href = $(this).attr('href');
        const $this = $(this);
        const $topMenuInserted = $this.parents(".topMenuInserted");
        /**
         * variable que valida que se encuentre el menu superior en el aula.
         */
        let ifr = createIframeJquery(href);
        /** se muestra el icono de full screen */
        $("#full").fadeIn();
        var state = false;
        /** se valida que este en una pagina */
        if (inCourse() != null) {
            //event.preventDefault();
            /** se muestra el loader  */
            $('.secondWhite').fadeIn();
            openModal();
            /* se agrega el iframe al popup */
            $('.thirdWhite').html(ifr);
        }
    } catch (error) {
        doCatch(error);
    }
});

/**
 * esta funcion es del aula principal de canvas.
 */
$(document).on('click', '.bntMenu,.btnsMods', function (e) {
    const $this_ = $(this);
    var state = $('.btnsMods')
        .css('right')
        .replace(/\px/g, '');
    if (state < 0) {
        $('.btnsMods').animate({
            right: 0,
        },
            350
        );
    } else {
        if ($this_.parents().hasClass('navSub')) {
            // console.log('#########################--------------------##########################');
            return false;
        }
        $('.btnsMods').animate({
            right: '-200%',
        },
            350
        );
    }

});
/**
 * menu del aula en responsive
 */
$(document).on('click', '.btnsMods .cerrar', function (e) {
    $('.btnsMods').animate({
        right: '-200%',
    },
        350
    );
});

/**
 * esta funcion es para el modal de componentes
 */
$(document).on('click', '.whitex .close,.backdrop', function (e) {
    e.preventDefault();
    closeModal();
    $('body').css('overflow', 'auto');
    if (previsualice != null && previsualice == true) {
        saveChanges();
        previsualice = false;
    }
});

document.getElementByClassName("thumbnail_pant_prin_recorte").src="https://s3.us-east-1.amazonaws.com/content.lameca.com.ar/imgs/tfg/fondovideo.PNG";

/**
 * menu icono izquierdo del modal.
 */
$(document).on('click', `#full,.fullscreenToggle`, function (e) {
    e.preventDefault();
    try {
        var ifr = false;
        if ($(this).hasClass("fullscreenToggle")) {
            ifr = true;
        }
        let el = document.getElementById('MainPopupIframe');
        var local = false;
        if (el == null) {
            local = true;
            el = document.getElementById('thirdWhite');
            /* el_ = $('#thirdWhite');
            el_.css("overflow", "auto"); */
        }
        ofs(el, local, ifr);
    } catch (error) {
        doCatch(error);
    }
});

function ilumnoCustom() {
    try {
        //removeRebuildCourse();
        removeRebuildCourseTutor();
        hideMessageToTeacherAssistance();
        removeInitialPage();
        error404();
        hideStudentHelper();
        $("head").append(modalStyles());
        $("body").append(modal());
        ifPageFull();
        checkIfStudentTitle();
    } catch (error) {
        console.log(error);
    }
}
ilumnoCustom();


$('.toModal').on('click', function(){
document.getElementById("aivochat-launcher").style.opacity = "0";
document.getElementById("AgentAppContainer").style.opacity = "0";

});