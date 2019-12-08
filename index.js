$('#fileUpload').hide();
$('#uploads').css({
    cursor: 'pointer',
    width: '80px',
    height: '80px'
});
let arrayImages = [];
let countIMG = 0;
$(document).on('change', '#fileUpload', function () {
    for (let i of this.files) {
        if (arrayImages.length >= 20) {
            alert('Maximum size 20 images');
            break;
        } else {
            arrayImages.push(i);
            $('#append').append("<img src='' alt='" + countIMG + "' width='100px' height='100px' class='rm'><button class='remove rm'>X</button>");
            $('img[alt=' + countIMG + ']').attr('src', URL.createObjectURL(i));
            countIMG++;
            $('#count').text(countIMG);
        }
    }
});
$(document).on('click', '#send', function () {
    let data = new FormData();
    for (let i of arrayImages) {
        data.append('file[]', i);
    }
    if (arrayImages.length > 0) {
        $.ajax({
            url: 'file.php',
            type: 'POST',
            dataType: 'JSON',
            enable: 'multipart/form-data',
            data: data,
            contentType: false,
            processData: false,
            success: () => {
                arrayImages = [];
                $('#count').text(0);
                $('.remove').remove();
            }
        });
    }
});
$(document).on('click', '.remove', function () {
    let id = $(this).prev();
    let temp = arrayImages[0];
    arrayImages[0] = arrayImages[id.attr('alt')];
    arrayImages[id.attr('alt')] = temp;
    arrayImages.shift();
    id.remove();
    $(this).remove();
    countIMG--;
    $('#count').text(countIMG);

});
$(document).on('click', '#delete_all', function () {
    $.ajax({
        url: "file.php",
        type: 'PUT',
        success: () => {
            $('.rm').remove();
            arrayImages = [];
            $('#count').text(0);
            $('.remove').remove();
            countIMG = 0;
        }
    })
});