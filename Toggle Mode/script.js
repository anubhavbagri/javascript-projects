
var toggle = document.getElementById('toggle');
var flag;

toggle.addEventListener('click', function () {
    if (flag) {
        document.getElementById('bg').style.backgroundColor = '#FAFAFA';
        document.getElementById('text').style.color = '#292C35';
        flag = false;
    }
    else {
        document.getElementById('bg').style.backgroundColor = '#292C35';
        document.getElementById('text').style.color = '#FAFAFA';
        flag = true;
    }
});
