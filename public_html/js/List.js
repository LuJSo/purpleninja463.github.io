$(function () {
    var APPLICATION_ID = "0CD52D35-20EF-0853-FF8E-F0C07FF96000", 
    SECRET_KEY = "737F8324-CA40-C350-FF69-0DBFD6750000",
    VERSION = "v1";
    
     Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper('format', function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
});

function Posts(args){
    args = args || {};
    
      var taskStorage = Backendless.Persistence.of( Tasks);
    var dataQuery = {
         condition: "author = " + YOUR_ID_HERE
    };
    var myTasks = taskStorage.find( dataQuery );
    
    this.title= args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}

$(document).on('click', '.deleteA',function (event){
 Materialize.toast('Deleted', 1500);
 Backendless.Persistence.of(Posts).remove(event.target.attributes.data.nodeValue);
 
});

