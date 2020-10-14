# What is the MERN Stack?

MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.

* **MongoDB** - document database
* **Express(.js)** - Node.js web framework
* **React(.js)** - a client-side JavaScript framework
* **Node(.js)** - the premier JavaScript web server

# How does the MERN stack work?

The MERN architecture allows you to easily construct a 3-tier architecture (frontend, backend, database) entirely using JavaScript and JSON.

![](https://webassets.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png)
# React.js Front End

The top tier of the MERN stack is React.js, the declarative JavaScript framework for creating dynamic client-side applications in HTML. React lets you build up complex interfaces through simple Components, connect them to data on your backend server, and render them as HTML.

React’s strong suit is handling stateful, data-driven interfaces with minimal code and minimal pain, and it has great support for forms, error handling, events, lists, and more.

# Express.js and Node.js Server Tier

The next level down is the Express.js server-side framework, running inside a Node.js server. Express.js bills itself as a “fast, unopinionated, minimalist web framework for Node.js,” and that is indeed exactly what it is. Express.js has powerful models for URL routing *(matching an incoming URL with a server function)*, and handling HTTP requests and responses.

By making XML HTTP Requests (XHRs) or GETs or POSTs from your Angular.js front-end, you can connect to Express.js functions that power your application. Those functions in turn use MongoDB’s Node.js drivers, either via callbacks for using Promises, to access and update data in your MongoDB database.

![](https://www.educative.io/api/edpresso/shot/5266982947520512/image/6392882854363136&sa=D&source=hangouts&ust=1602749991234000&usg=AFQjCNFYQpsQRL75ksYP_t6P_en-2YDZOA)

# MongoDB Database Tier

If your application stores any data (user profiles, content, comments, uploads, events, etc.), then you’re going to want a database that’s just as easy to work with as Angular, Express, and Node.

That’s where MongoDB comes in: JSON documents created in your Angular.js front end can be sent to the Express.js server, where they can be processed and (assuming they’re valid) stored directly in MongoDB for later retrieval.