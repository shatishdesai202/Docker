# 🐳 Docker

| Images                                   | Container                                             |
| ---------------------------------------- | ----------------------------------------------------- |
| Templates/Blueprint for Container        | The Running Unit of Software                          |
| Contains Code + Required tools/ runtimes | Multiple Containers can be created based on one image |

<br/>
<br/>

## 🔥 Lifecycle

---

### - `docker create` creates a container but does not start it.

### - `docker rename` allows the container to be renamed.

### - `docker run` creates and starts a container in one operation.

### - `docker rm` deletes a container.

### - `docker update` updates a container's resource limits.

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
