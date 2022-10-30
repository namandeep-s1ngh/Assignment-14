export enum permission{
    getUserCount = "getUserCount",
    getUsers = "getUsers", 
    updateAllUsers = "updateAllUsers", 
    getUser = "getUser", 
    updateUser = "updateUser", 
    replaceUser = "replaceUser",
    deleteUser = "deleteUser", 
    createCustomer = "createCustomer", 
    getCustomersCount = "getCustomersCount", 
    getCustomers = "getCustomers", 
    updateAllCustomers = "updateAllCustomers", 
    getCustomer = "getCustomer", 
    updateCustomer = "updateCustomer", 
    replaceCustomer = "replaceCustomer", 
    deleteCustomer = "deleteCustomer", 
    createRole = "createRole", 
    getRolesCount = "getRolesCount", 
    getRoles = "getRoles", 
    updateAllRoles = "updateAllRoles", 
    updateRole = "updateRole", 
    replaceRole = "replaceRole", 
    deleteRole = "deleteRole", 
    getCustomerUsers = "getCustomerUsers", 
    createCustomerUser = "createCustomerUser", 
    updateCustomerUser = "updateCustomerUser", 
    deleteCustomerUser = "deleteCustomerUser", 
    getRoleUsers = "getRoleUsers", 
    createRoleUser = "createRoleUser", 
    updateRoleUser = "updateRoleUser", 
    deleteRoleUser = "deleteRoleUser", 
    getUserCustomer = "getUserCustomer", 
    getUserRole = "getUserRole"
}

// Super Admin will have access to all the permissions.
// Admin will have access to get and update related permissions.
// Subscriber will only have access to get related permissions.
