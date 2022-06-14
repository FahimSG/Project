# from which image - image we used as our base image
FROM nginx

# label to communicate with team members
LABEL MAINTAINER=FAHIM

# copy data from localhost to container
COPY index.html /usr/share/nginx/html/

# expose port 80
EXPOSE 80

# launch/create container
CMD ["nginx", "-g", "daemon off;"]