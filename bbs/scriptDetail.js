$(document).ready(function () {
    var href = window.location.href;
    var id = href.replace(/.+(detail)/, '');
    // 기존테이블 데이터 지우고 행을 추가해야한다면 아래 empty() 추가

    if (id == '') {
        $('#writer').attr('readonly', false);
    } else {
        id = id.replace("\/", "");
        $.ajax({
            url: 'http://127.0.0.1:8080/api/bbs/' + id,
            method: 'GET',
            success: function (data) {
                console.log(data);
                $("#titleText").val(data.title);
                $("#content").val(data.content);
                $("#writer").val(data.insterId);
                $("#bbsId").val(data.id);

            }
        });
    }

});

$('#register').on("click", function () {
    var formSerializeArray = $('form').serializeArray();
    var object = {};
    for (var i = 0; i < formSerializeArray.length; i++) {
        object[formSerializeArray[i]['name']] = formSerializeArray[i]['value'];
    }

    $.ajax({
        url: 'http://127.0.0.1:8080/api/bbs',
        data: JSON.stringify(object),
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            location.href = "/";
        }
    });
});

$('#update').on("click", function () {


    var formSerializeArray = $('form').serializeArray();
    var object = {};
    for (var i = 0; i < formSerializeArray.length; i++) {
        object[formSerializeArray[i]['name']] = formSerializeArray[i]['value'];
    }

    var id = $("#bbsId").val();

    $.ajax({
        url: 'http://127.0.0.1:8080/api/bbs/' + id,
        data: JSON.stringify(object),
        method: 'PUT',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            location.href = "/";
        }
    });
});

$('#delete').on("click", function () {

    var id = $("#bbsId").val();

    $.ajax({
        url: 'http://127.0.0.1:8080/api/bbs/' + id,
        method: 'DELETE',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            location.href = "/";
        }
    });
});