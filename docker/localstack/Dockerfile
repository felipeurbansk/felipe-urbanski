FROM localstack/localstack

COPY --chown=localstack docker/localstack/init/*.sh /etc/localstack/init/ready.d/

RUN chmod u+x /etc/localstack/init/ready.d/*.sh