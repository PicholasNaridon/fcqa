'use strict';

registerRouteData('ec-settings', [{
    stateName: 'generalConfig.credentials',
    url: '/credentials/:credentialGroup/:credentialType'
}, {
    stateName: 'generalConfig.departments',
    url: '/departments'
}, {
    stateName: 'generalConfig.driversLicense',
    url: '/drivers-license'
}, {
    stateName: 'generalConfig.employmentGroups',
    url: '/employment-groups'
}, {
    stateName: 'generalConfig',
    url: '/general-config',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('listHeaders', 'view');
    }
}, {
    stateName: 'generalConfig.jobTypes.jobTypeDetail',
    url: '/{jobTypeId:[0-9A-Za-z-]{36}}?action'
}, {
    stateName: 'generalConfig.jobTypes',
    url: '/job-types'
}, {
    stateName: 'generalConfig.locations',
    url: '/locations'
}, {
    stateName: 'generalConfig.positions',
    url: '/positions'
}, {
    stateName: 'generalConfig.signatures',
    url: '/signatures',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('signatures', 'manage');
    }
}, {
    stateName: 'generalConfig.statusReasons',
    url: '/status-reasons'
}, {
    stateName: 'index',
    url: '/'
}, {
    stateName: 'permissions.groups.all',
    url: '/all'
}, {
    stateName: 'permissions.groups.detail',
    url: '/{groupId:[0-9A-Za-z-]+}'
}, {
    stateName: 'permissions.groups.detail.groupMembers',
    url: '/group-members'
}, {
    stateName: 'permissions.groups.detail.profileAndScope',
    url: '/profile-and-scope'
}, {
    stateName: 'permissions.groups',
    url: '/groups'
}, {
    stateName: 'permissions',
    url: '/permissions',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('permissionProfiles', 'edit');
    }
}, {
    stateName: 'permissions.profiles.all',
    url: '/all'
}, {
    stateName: 'permissions.profiles.detail',
    url: '/{profileId:[0-9A-Za-z-]{36}}'
}, {
    stateName: 'permissions.profiles.detail.tab',
    url: '/{action:view|edit}/{tab:[0-9A-Za-z-]+}'
}, {
    stateName: 'permissions.profiles',
    url: '/profiles'
}, {
    stateName: 'permissions.users.all',
    url: '/all'
}, {
    stateName: 'permissions.users.detail',
    url: '/{userId:[0-9A-Za-z-]{36}}'
}, {
    stateName: 'permissions.users',
    url: '/users'
}, {
    stateName: 'userAccounts',
    url: '/user-accounts',
    $permissions: function $permissions(permissionSvc) {
        return permissionSvc.isPermittedAction('users', 'view') || permissionSvc.isPermittedAction('employees', 'manageAccountAccess');
    }
}]);
