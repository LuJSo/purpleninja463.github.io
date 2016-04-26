$(function () {
    var APPLICATION_ID = "0CD52D35-20EF-0853-FF8E-F0C07FF96000", 
    SECRET_KEY = "737F8324-CA40-C350-FF69-0DBFD6750000",
    VERSION = "v1";
    
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
    
    var dataStore = Backendless.Persistence.of(Posts);
    var post = new Posts({title: "My first blog post", content:"My first blog post contnet", authorEmail:"email@email.com"});
    dataStore.save(post);
});

function Posts(args) {
    args = args || {};
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail = args.authorEmail || "";
}