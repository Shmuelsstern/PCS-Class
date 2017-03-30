

$(function(){
    
    "use strict";

    console.log('got to index.sj');

    const addComment=$('.addComment'),
        submitComment=$('#submitComment');

    addComment.click((event)=>{
        let thisPost=$(event.target.closest('.post')),
            commentForm=$( '<form>add your comment <textarea></textarea><input type="submit"> </form>');
        commentForm.appendTo(thisPost);
        $('[type="submit"]').click((event)=>{
            event.preventDefault();
            console.log();
            $.post('/postComment',{postId:thisPost.attr("id"),comment:$('textarea').val()});
            commentForm.remove();
        });
    });

});