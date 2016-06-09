$(document).on('ready',function(){
    common.run();
    comment.run();
});

var common = {
    likeFunction: function(){
        $(document).on('click','.like-btn',function (e) {
             e.preventDefault();
             var staid = $(this).closest("form").find("input[name='status_id']").val();
             $.post('/larasocial/status/like',
             {
                 "_token": $(this).closest("form").find("input[name='_token']").val(),
                 "status_id" : staid
             },'json'
             ).done(function (data) {
                $('.count-'+staid).text(data.count_like);
             }).error(function (err) {
                console.log(err);
             });
        });
    },
    run: function(){
        this.likeFunction();
    }
}

var comment = {
    likeCommentFunction: function(){
        $(document).on('click','.like-comment-btn',function (e) {
            e.preventDefault();
            var cmid = $(this).closest("form").find("input[name='comment_id']").val();
            $.post('/larasocial/comment/like',
                {
                    "_token": $(this).closest("form").find("input[name='_token']").val(),
                    "comment_id" : cmid
                },'json'
            ).done(function (data) {
                $('.count-comment-'+cmid).text(data.count_like);
            }).error(function (err) {
                console.log(err);
            });
        });
    },
    run: function(){
        this.likeCommentFunction();
    }
}