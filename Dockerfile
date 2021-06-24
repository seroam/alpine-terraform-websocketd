FROM golang:latest as websocketd
ENV CGO_ENABLED 0
RUN go get github.com/joewalnes/websocketd


FROM hackinglab/alpine-base:3.2
LABEL maintainer=<ivan.buetler@compass-security.com>

ENV TERRAFORM_VERSION=0.15.3

COPY --from=websocketd /go/bin/websocketd /usr/bin/websocketd

# Add the files
ADD root /

RUN apk add --no-cache --update nginx \
    vim \
    nginx \
    curl \
    util-linux \
    dcron \
    screen \
    openssl \
    openssh \
    python3 \
    proxychains-ng \
    py-pip && \
    if [ ! -e /usr/bin/python ]; then ln -sf python3 /usr/bin/python ; fi && \
    \
    echo "**** install pip ****" && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --no-cache --upgrade pip setuptools wheel && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
	rm -rf /var/cache/apk/* && \
	curl https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip -o /tmp/awscliv2.zip  && \
	unzip /tmp/awscliv2.zip -d /opt/ && \
	/opt/aws/install -i /usr/local/aws-cli -b /usr/local/bin && \
	curl -sSL https://releases.hashicorp.com/terraform/${TERRAFORM_VERSION}/terraform_${TERRAFORM_VERSION}_linux_amd64.zip \
	-o /tmp/terraform.zip && \
	unzip /tmp/terraform.zip -d /usr/bin && \
	rm /tmp/terraform.zip && \
	chown -R nginx:www-data /var/lib/nginx && \
	chown -R nginx:www-data /opt/www && \
	rm -rf /var/cache/apk/* 

# Terraform CLI
RUN apk add --no-cache curl tar openssl sudo bash jq python3

RUN apk --update --no-cache add postgresql-client postgresql

RUN apk add --virtual=build gcc libffi-dev musl-dev openssl-dev make python3-dev

RUN pip3 install virtualenv &&\
    python3 -m virtualenv /opt/azure-cli

RUN /opt/azure-cli/bin/python -m pip --no-cache-dir install azure-cli packaging azure-mgmt-resource

RUN chmod +x /usr/bin/az

# Expose the ports for nginx
EXPOSE 80
