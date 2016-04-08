Hey Ryan,

sorry it's taken a while to get back to you - jobhunting while looking after a 2 year old doesn't leave many hours in the day.

This is a basic SPA - created using AngularJS.

The dependencies are all included - so the app will run on localhost with Apache - no need to install any packages. If you're feeling especially lazy I also deployed this version to my own server - feel free to check it out there:

http://graemekean.net/stormid/index.html

Error messaging is being handled by standard JS alerts at the moment - I still need to create a service to deal with them in the app.

There are quite a few unused scripts in the project and it has not been minified for deploying. I'm aware that using Grunt or Gulp would help the performance of the app and reduce the weight. 

Below are some of my thoughts and processes.

Thanks again for setting a task for me - I've really enjoyed applying my knowledge of Rails to the Angular way of working. 

If you need any further info or if you have any problems running the app - drop me an email.

Regards,

Graeme.











MOSCOW CHART FOR TASK

MUST

Build a SINGLE PAGE Application SPA - DONE

Support IE9+       - DONE
Be responsive 		- DONE
Get data from the jsonplaceholder api and output that data to the view - DONE
Post data to the same api using a form - DONE
Include basic interaction - DONE

SHOULD

Have a nice UI - DONE
Have error handling - DONE
Have a test framework - NOT YET

COULD

Have user authentication - like Devise - probably Oauth
	- signup registration
	- authentication

WOULD

Have access to proper data
Have UCD








INITIAL THOUGHTS

COMPETENCIES:

Identify the best technology for the task - since none were provided.

I'll be using Angular because I'm creating a Single Page Application. Angular 1.3 is supported in IE9+, so if I stick to the core features everything should be fairly well supported across most systems. 

An awareness of the seven RESTFul routes - I assume to demonstrate that I can interact with ASP.NET developers building the back end.
I have two other projects on Github where I built applications based on RESTful concepts. My focus on those was to learn the backend technologies.

Demonstrate an awareness of reponsive design principles.
My initial thought was to style this by hand rather than use Bootstrap - to show that I can hand code CSS. However, given that this is a mockup and not a bespoke solution; it was best to use a framework - in this case it killed 2 birds with one stone - the nice UI and the responsiveness. It was good to learn how to integrate Bootstrap with Angular too.

Demonstrate a competency with Git.
Show that I can make my work available in a format that is readable and easy to view. By using Angular and keeping all the logic on the client side, the project should be accessible - from a developers perspective. Angular runs in Apache with no setup or dependencies. I might load onto my own server and share the link along with the GitHub link, for easy viewing with no setup or download.

Demonstrate an awareness of testing single page applications.
Jasmine at CodeClan.
Being very new to Angular - I didn't get involved in testing this application - but I have been researching frameworks such as factory girl, ngMock and Jasmine. I've also been playing around with the build tools in Visual Studio and Yeoman.


