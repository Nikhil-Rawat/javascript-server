# The Twelve Factor

## Introduction

The twelve-factor app is a methodology for building software-as-a-service apps that:

* Use **declarative** formats for setup automation, to minimize time and cost for new developers joining the project.
* Have a **clean contract** with the underlying operating system, offering maximum portability between execution environments.
* Are suitable for deployment on modern **cloud platforms**, obviating the need for servers and systems administration.
* **Minimize divergence** between development and production, enabling continuous deployment for maximum agility.
* And can **scale up** without significant changes to tooling, architecture, or development practices.

## The Twelve Factors are:

### 1. **Codebase**

It implies:

* Use of version control like **Git**,**Subversion** and **Mercurial**.
* **One repository per application** and the deploy each application to multiple environment.
* **Refrain multiple application in same repository**. This way your applications history will not get entangled and will be easy to isolate when needed.


### 2. **Dependencies**
Explicitly declare and isolate dependencies

Most programming languages offer a packaging system for distributing support libraries, such as CPAN for Perl or Rubygems for Ruby. Libraries installed through a packaging system can be installed system-wide (known as “site packages”) or scoped into the directory containing the app (known as “vendoring” or “bundling”).

**A twelve-factor app never relies on implicit existence of system-wide packages**. It declares all dependencies, completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.



### 3. **Config.**

**What is Configuration?**

Anything that changes between deployment environments.
* Resources handles to the **database**, **memcached** and otherbacking service.
* Credentials to external services such as **Amazon S3** or **twitter**.
* Per-deploy values such as the canonical hostname for the deploy.

Configuration should be strictly separated from code. It should belong in the *environment* not in the application.

**LITMUS TEST**:
Can you make your application open source at anytime **without** compromising any credentials?


### 4. **Backing Services**
Treat backing services as attached resources

A *backing service* is any service the app consumes over the network as part of its normal operation. Any kind of service ,datastores backs-up your service like:

* **redis**
* **Postfix**
* **Memcached**

This kind of backing service in **twelve factor app** should be treated as *attachable* resources. And it should be *attachable* via a single URL. That URL should be stored as a environmental variable so it can be changed between environment.

This will allow back-up without changing code-base.



### 5. **Build, release, run**

It is a principle that states deployment process should be executed in three discrete steps:

* **build**: where you compile code and make build artifacts.
* **release**: combine build artifacts with configuration for particular environment and release image. Release image tells everything that needs to run.
* **run**: Finally run application from release image.

![](https://12factor.net/images/release.png)

**The twelve-factor app uses strict separation between the build, release, and run stages**. For example, it is impossible to make changes to the code at runtime, since there is no way to propagate those changes back to the build stage.



### 6. **Processes**

The twelve factor app should be stateless. So when application crashes does not include important data.



### 7. **Port binding**

**The twelve-factor app is completely self-contained** i.e. The web app exports HTTP as a service by binding to a port.

Traditional Deployment depends on external container whereas modern deployment is self-contained and does not have to depend for binding and request.



### 8. **Concurrency**
Scale out via the process model

Any computer program, once run, is represented by one or more processes. The running process only minimally visible to the developers of the app.

![](https://12factor.net/images/process-types.png)

**In the twelve-factor app, processes are a first class citizen**. Processes in the twelve-factor app take strong cues from the unix process model for running service daemons. Using this model, the developer can architect their app to handle diverse workloads by assigning each type of work to a process type. For example, HTTP requests may be handled by a web process, and long-running background tasks handled by a worker process.

### 9. **Disposability**

**The twelve-factor application are:**
* Quick to start-up.
* Graceful to shutdown.
* Resilience to failure.

Server should be disposable,cheap and can be able to scale them up.

* easy to replace
* easy to modify
* decoupled from externam infrastructure.



### 10.  **Dev/prod parity**

Its a principle that states **Development environment** should be *identical* to **Productivity environment** and every other environment in between.
The most common place where its violated is in database layer. 

**Parity** leads to **reproducibility** which later leads to **disposability**.


### 11.  **Logs**
Treat logs as event streams

Logs provide visibility into the behavior of a running app. In server-based environments they are commonly written as "logfile" on disk; but this is only an output format.

Logs are the stream of time-ordered and agrregated events collected from the output streams of all running process and backing services. Logs are typically a text format with one event on one line. Logs have no start and end point but flows continously as long the app is operating.

**A twelve-factor app never concerns itself with routing or storage of its output stream**. It should not attempt to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to stdout. During local development, the developer will view this stream in the foreground of their terminal to observe the app’s behavior.

### 12.  **Admin processes**
Run admin/management tasks as one-off processes

The process formation is the array of processes that are used to do the app’s regular business as it runs. Separately, developers will often wish to do one-off administrative or maintenance tasks for the app, such as:

* Running database migrations.

* Running a console (also known as a REPL shell) to run arbitrary code or inspect the app’s models against the live database.

* Running one-time scripts committed into the app’s repository.

One-off admin processes should be run in an identical environment as the regular long-running processes of the app. They run against a release, using the same codebase and config as any process run against that release. Admin code must ship with application code to avoid synchronization issues.

The same dependency isolation techniques should be used on all process types.

**Twelve-factor** strongly favors languages which provide a REPL shell out of the box, and which make it easy to run one-off scripts. In a local deploy, developers invoke one-off admin processes by a direct shell command inside the app’s checkout directory.
