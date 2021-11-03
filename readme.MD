# 🐳 Docker

| Images                                   | Container                                             |
| ---------------------------------------- | ----------------------------------------------------- |
| Templates/Blueprint for Container        | The Running Unit of Software                          |
| Contains Code + Required tools/ runtimes | Multiple Containers can be created based on one image |

<br/>
<br/>

# 🖼️image

---

## 🔥 Lifecycle

---

### - `docker images` shows all images.

### - `docker import` creates an image from a tarball.

### -`docker build` creates image from Dockerfile.

### - `docker commit` creates image from a container, pausing it temporarily if it is running.

### - `docker rmi` removes an image.

### - `docker load` loads an image from a tar archive as STDIN, including images and tags (as of 0.7).

### - `docker save` saves an image to a tar archive stream to STDOUT with all parent layers, tags & versions (as of 0.7).

### - `docker image prune` remove unused images.

### - `docker image prune -a` Remove all unused images, even if they are referenced by a container.

<br/>
<br/>

## 🔥 Info

---

### - `docker history` shows history of image.

### -`docker tag` tags an image to a name (local or registry).

<br/>
<br/>

# 📦Container

---

## 🔥 Lifecycle

---

### - `docker create` creates a container but does not start it.

### - `docker rename` allows the container to be renamed.

### - `docker run` creates and starts a container in one operation.

### - `docker rm` deletes a container.

### - `docker update` updates a container's resource limits.
### - `docker container prune` removes stopped containers.

<br/>
<br/>

## 🔥 Starting and Stopping

---

### - `docker start` starts a container so it is running.

### - `docker stop` stops a running container.

### - `docker restart` stops and starts a container.

### - `docker pause` pauses a running container, "freezing" it in place.

### - `docker unpause` will unpause a running container.

### - `docker wait` blocks until running container stops.

### - `docker kill` sends a SIGKILL to a running container.

### - `docker attach` will connect to a running container.

<br/>
<br/>

## 🔥 Info

---

### - `docker ps` shows running containers.

### - `docker logs` gets logs from container. (You can use a custom log driver, but logs is only available for json-file and journald in 1.10).

### - `docker inspect` looks at all the info on a container (including IP address).

### - `docker events` gets events from container.

### - `docker port` shows public facing port of container.

### - `docker top` shows running processes in container.

### - `docker stats` shows containers' resource usage statistics.

### - `docker diff` shows changed files in the container's FS.

### - `docker ps -a` shows running and stopped containers.

### - `docker stats --all` shows a list of all containers, default shows just running.

<br/>
<br/>

## 🔥 Import / Export

---

### - `docker cp` copies files or folders between a container and the local filesystem.

### - `docker export` turns container filesystem into tarball archive stream to STDOUT.

<br/>
<br/>

## 🔥 Import / Export

---

### - `docker exec` to execute a command in container.

<br/>
<br/>

## 🐋 Dockerfile

---

### - `.dockerignore`

### - `FROM` Sets the Base Image for subsequent instructions.

### - `MAINTAINER` (deprecated - use LABEL instead) Set the Author field of the generated images.

### - `RUN` execute any commands in a new layer on top of the current image and commit the results.

### - `CMD` provide defaults for an executing container.

### - `EXPOSE` informs Docker that the container listens on the specified network ports at runtime. NOTE: does not actually make ports accessible.

### - `ENV` sets environment variable.

### - `ADD` copies new files, directories or remote file to container. Invalidates caches. Avoid ADD and use COPY instead.

### - `COPY` copies new files or directories to container. By default this copies as root regardless of the USER/WORKDIR settings. Use --chown=<user>:<group> to give ownership to another user/group. (Same for ADD.)

### - `ENTRYPOINT` configures a container that will run as an executable.

VOLUME creates a mount point for externally mounted volumes or other containers.

### - `USER` sets the user name for following RUN / CMD / ENTRYPOINT commands.

### - `WORKDIR` sets the working directory.

### - `ARG` defines a build-time variable.

### - `ONBUILD` adds a trigger instruction when the image is used as the base for another build.

### - `STOPSIGNAL` sets the system call signal that will be sent to the container to exit.

### - `LABEL` apply key/value metadata to your images, containers, or daemons.

### - `SHELL` override default shell is used by docker to run commands.

### - `HEALTHCHECK` tells docker how to test a container to check that it is still working.

<br/>
<br/>

# ✨ docker commands

## creating images

### - "`docker build -t IMAGE_NAME:TAG PATH`" ---> "`docker build -t node_on_docker:1 .`"

## running container

### - "`docker run -p 8080:3000 -d --rm --name containerName ImageName:TAGS`" ---> "`docker run -p 8080:3000 -d --rm --name nodes node_on_docker:1`"
