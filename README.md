# WinAttackLab-terraform
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
When adding a custom terraform deployment, there are a few things to be aware of

### Assumptions
- The deployment manager assumes that the file `/terraform/terraform.tfvars` exists and contains the following lines with your Azure credentials:
  - `client_id = "your-client-id`
  - `client_secret = "your-client-secret"`
  - `tenant_id = "your-tenant-id"`
  Those variables must be placed a the beginning of lines, with no preceding characters.

- Only one resource group is used in the deployment and there is a `.tf` file in `/terraform/` that has the variable declaration `resource "azurerm_resource_group" "your-resource-group-variable-name"` in it. Again, no characters should precede the word `resource` on that line.

### Files to edit
Place your Terraform deployment files in `terraform`.  

To customize the deployment manager, you will want to edit a few files. In particular:
- Change the name of the deployment manager in `root/opt/www/index.html` on lines 13, 18, and 84.
- Edit the file `root/opt/scripts/show-credentials.sh` to echo any credentials a user might need. An example is provided in `examples/show-credentials.sh.example`.
- Edit the  `root/etc/cont-init.d/70-deployment-specific-setup` to make any changes - such as generating passwords - before the deployment. An example is provided in `examples/70-deployment-specific-setup.example`.
