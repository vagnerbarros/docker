# creates a layer from the ubuntu:18.04
# FROM [--platform=<platform>] <image> [AS <name>]
# FROM [--platform=<platform>] <image>[:<tag>] [AS <name>]
# FROM [--platform=<platform>] <image>[@<digest>] [AS <name>]
FROM ubuntu:18.04

# the LABEL instruction adds metadata to an image
LABEL description="this text is added to metadata of image"

# set a environment key pwd the value /usr/app
# The environment variables set using ENV will persist when a container is run from the resulting image.
# ENV <key> <value> or ENV <key>=<value> ...
ENV pwd /usr/app

# set the current work diretory using the value of pwd env. key
WORKDIR ${pwd}

# copy all of current directory to /usr/app
# COPY [--chown=<user>:<group>] <src>... <dest>
COPY . ${pwd}

# RUN <command> the command is run in a shell, which by default is /bin/sh -c
RUN /bin/bash -c 'npm install'

# EXPOSE <port> [<port>/<protocol>...] TCP is the default protocol, if not specified.
# The EXPOSE instruction does not actually publish the port. It functions as a type of documentation between the person who builds the image and the person who runs the container, about which ports are intended to be published.
EXPOSE 3000

# An ENTRYPOINT allows you to configure a container that will run as an executable.
ENTRYPOINT [ "executable", "param1", "param2" ]

# There can only be one CMD instruction in a Dockerfile
# The main purpose of a CMD is to provide defaults for an executing container
CMD ["node", "app.js"]