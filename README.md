# Terraform
## UI
Edit the constants in the file `root/opt/www/js/script.js` to your needs.

* `BASE_SOCKET_URL` ('ws://localhost:8080/api/'): URL of WebSocket server.
* `VERBOSE` (true): Show connection and disconnection messages.
* `DEFAULT_TOOL` ('Deploy'): Which tool is preferred, when no tool is selected.

## Build & Run


Please build and run the docker-based API service executing the following command
* `docker-compose up --build`

## Run
Please run the docker-based API service `interactively` by executing the following command
* `docker-compose up`

If you want to run the docker in `detached` mode, execute
* `docker-compose up -d`

## Access
Please open your browser to `http://localhost`


## Custom deployments
When adding a custom terraform deployment, there are a few things to be aware of.

### Assumptions
- The deployment manager assumes that the file `/terraform/terraform.tfvars` exists and contains the following lines with your Azure credentials (or placeholders if you plan to use the environment variables):

```
client_id = "your-client-id
client_secret = "your-client-secret"
subscription_id = "your-subscription-id"
tenant_id = "your-tenant-id"
```
  
These variables must be placed at the beginning of lines, with no preceding characters. See [Environment variables](#environment-variables) if you wish to specify the credentials via environment variables.  

- Only one resource group is used in the deployment and there is a `.tf` file in `/terraform/` or one of its subdirectories that has a variable declaration like `resource "azurerm_resource_group" "your-resource-group-variable-name"` in it. Again, no characters should precede the word `resource` on that line.

### Files to edit
Place your Terraform deployment files in `terraform`.  

To customize the deployment manager, you will want to edit a few files. In particular:
- Edit the file `root/etc/cont-init.d/70-deployment-specific-setup` to make any changes - such as generating passwords - before the deployment. An example is provided in [examples/70-deployment-specific-setup.example](examples/70-deployment-specific-setup.example).
- Edit the file `root/opt/scripts/show-credentials.sh` to echo any credentials a user might need. An example is provided in [examples/show-credentials.sh.example](examples/show-credentials.sh.example).

### Environment variables
You may specify the Azure login credentials via environment variables in your docker-compose file. In that case, set the variables in your terraform.tfvars file as follows and use the environment variables `CLIENT_ID`, `CLIENT_SECRET`, `SUBSCRIPTION_ID`, and `TENANT_ID`.

```
client_id = "CLIENT_ID"
client_secret = "CLIENT_SECRET"
subscription_id = "SUBSCRIPTION_ID"
tenant_id = "TENANT_ID"
```

You may specify the heading of the Web UI using the environment variable `UI_HEADING`.

The environment variable `autodestroy` to specify a duration (in seconds) after which the Terraform desployment will automatically be destroyed, starting from the moment a user starts the Deploy Task. The minimum duration is 15 minutes (900s). 

*Note that values set specifically in files take precedence over those set via environment variables.*

**You must include the following in your docker-compose file in order for the deployment manager to work properly:**   
* Environment variable `S6_KILL_FINISH_MAXTIME=3600000`  
  Allow for up to 1 hour for the Terraform destroy script to finish before S6 kills the process.
* `stop_grace_period: 1h`  
  Allow for up to 1 hour for the Terraform destroy script to finish before docker-compose SIGKILLs the container.

### Accepting License Agreements
If you must accept a license agreement for your deployment, it is best to not do it via Terraform. The deployment will error out if the same agreement has previously been accepted in a subscription.  
To accept such an agreement via the Azure CLI, create a new script in `root/etc/cont-init.d` and have it run after 75-azure. An example for such a script is provided in [77-accept-kali-plan.example](examples/77-accept-kali-plan.example).
