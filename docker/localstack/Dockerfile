FROM localstack/localstack

COPY --chown=localstack ./init/ /etc/localstack/init/ready.d/

RUN chmod +x /etc/localstack/init/ready.d/*.sh