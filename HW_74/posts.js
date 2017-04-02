(function () {
    'use strict';

    const addCommentGUI = $(`<div>
                                <textarea id="commentContent"></textarea>
                                <button id="addComment">add</button>
                                <button id="cancelComment">cancel</button>
                           </div>`),
        commentContent = addCommentGUI.find('#commentContent');

    $(document).on('click', '.addComment', e => {
        const theTarget = $(e.target);
        theTarget.after(addCommentGUI);
        addCommentGUI.show();
        theTarget.hide();
    });

    $(document).on('click', '.showComments', e => {
        const theTarget = $(e.target);
        $.get('/showComments',{
            id: $(e.target).closest('.post').attr('id')
        },(data)=>{
            var parsedData = JSON.parse(data);
            console.log(parsedData);
            parsedData.comments.forEach((comment)=>{
                console.log(comment);
                console.log(parsedData._id);
                $('#' + parsedData._id).find('.comments').append(comment.content+'\n');
            },parsedData);
        });
        theTarget.hide();
    });

    function hideAddCommentGUI() {
        addCommentGUI.hide();
        $('#commentContent').val('');
        $('.addComment').show();
    }

    $(document).on('click', '#addComment', e => {
        $.post('/addComment', {
            id: $(e.target).closest('.post').attr('id'),
            content: $('#commentContent').val()
        });
        hideAddCommentGUI();
    });

    $(document).on('click', '#cancelComment', e => {
        hideAddCommentGUI();
    });

    io().on('comment', data => {
        /*
        <div>{{content}}</div>
        <div class="attribution">Posted by {{author}} at {{date}}</div>
        */
        $('#' + data.post).find('.comments').append(data.comment);
    });
}());