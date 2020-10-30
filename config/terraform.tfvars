#############################################################
# Define Project Specific Information						#
#############################################################

#Define Lab ID. Note: not more than 5 charachters allowed! (Because of VM Name limitation issues)
lab_id = "Lab1" 

#Define Local Administration User (admin & root are not allowed)
admin_username = "lab_admin"
admin_password = "1f!.FHOST-5DBbbb-4f"
dcadmin_password = "L4b_FHOST_2020!"
mgmtadmin_password = "Lab_FHOST_1999!"

#Define AD Domain Name
active_directory_netbios_name = "winattacklab"
active_directory_domain       = "winattacklab.local"

#Define Allowed IP for the Management
# management_ip_adresses = ["31.10.159.12"]
management_ip_adresses = ["146.4.10.235", "178.197.233.179", "178.197.224.216", "193.135.215.43", "62.2.85.146", "62.202.190.179", "31.10.159.12"]

#Define Azure Infrastructure Location
location = "West Europe"


############################################################
# Define FH OST Azure Infrastructure Authentication				#
#############################################################

#Define Client Secret
client_secret = "E8_ORNs~satraj2BWanPT.zMSQCzRpRZF1"

#Define Client ID
client_id = "034a305b-d901-413b-b52e-fff9e29b17ae"

#Define Subscription ID
subscription_id = "322b6634-32cc-4dd7-8076-229989846098"

#Define Tenant ID
tenant_id = "2c605520-2878-4f34-965e-8463293f3a11"


#############################################################

#Azure Tag
environment_tag = "Windows Attack Lab"

#VMs private IPs
dc1_server_ip = "10.0.1.100"
fs1_server_ip = "10.0.1.101"
fs2_server_ip = "10.0.1.102"
ws1_server_ip = "10.0.1.103"
kali1_client_ip = "10.0.1.15"
management_client_ip = "10.0.1.254"
windows_client_ip = "10.0.1.10"
