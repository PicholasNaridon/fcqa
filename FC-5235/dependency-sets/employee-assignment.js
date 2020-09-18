(function(){'use strict';function a(a,d,e,f,g,h){function i(a){var b=a.paySchedule,d=a.currentDetails;return null==d._payLane||null==d._payStep?0:c(b,'payLanes')[d._payLane].paySteps[d._payStep].payRate}function j(a){var b=a.employmentGroups,c=a.jobType;return b.find(function(a){return a.value===c._bargainingUnit.id})}function k(a){var b=a.paySchedule,d=a.assignmentDetails;return g.isValidPS(b)?c(b,'payRateFrequency'):null==d._payRateFrequency?c(b,'payRateFrequency'):d._payRateFrequency}var l=['_payLane','_payStep','_workDaysPerYear','_payPeriodsPerYear','_hoursPerDay','_fTE','_vacationDaysPerSchoolYear','_sickDaysPerSchoolYear','_personalDaysPerSchoolYear','_paidHolidaysPerSchoolYear','_payRateFrequency','_payRate'];return{getEmployementGroup:function(a){var b=a.employementGroups,c=a.jobType;return j({employmentGroups:b,jobType:c})},getEmploymentGroup:j,jobTypeValuesForAssignment:function(a){var c=a.paySchedule,e=a.jobTypeDetails,f=a.assignmentDetails,g=f===void 0?{}:f,h=l.reduce(function(a,b){return a[b]=null==g[b]?e[b]:g[b],a},{});h._payRateFrequency=k({paySchedule:c,assignmentDetails:g});var i=!(g._payRateFrequency!==d.annually)||b(h._hoursPerDay)&&b(h._workDaysPerYear)&&b(h._payPeriodsPerYear)&&null!==g._payRateFrequency;return Object.assign(h,{_jobTypeValuesForAssignmentAreValid:i})},calculatePayPerPeriod:function(a){var b=a.annualSalary,c=b===void 0?null:b,d=a.calculatedSalary,e=d===void 0?null:d,f=a.payPeriodsPerYear,g=null==c?e:c;return 0>=f||0>=g?0:g/f},calculateAnnualSalary:function(a){var b=a.payRateFrequency,c=a.payRate,e=a.hoursPerDay,f=a.workDaysPerYear;return b===d.annually?c:c*e*f},getPayRate:i,getPayRateFequency:k,getPayRateFrequency:k,calculatePayRate:h('ssEmployeeAssignmentHlp.calculatePayRate()','ssEmployeeAssignmentHlp.getPayRate()',i),getPrimaryAssignment:function(b,c,d){if((void 0===c&&(c=null),null!=b._assignments)&&0!==b._assignments.length){var f=c?c._asOf:null,g=b._assignments.find(function(b){return b._isPrimary&&e.isCurrent({obj:b,asOfDate:f,fromProp:'_startDateUtc',toProp:'_endDateUtc',org:d})});if(g){var h=g._startDateUtc,i=g._endDateUtc;g.formattedStartDateUtc=a.isForeverPast(h)?'':e.utcIsoToRelativeMoment(h,d).format('MM/DD/YYYY'),g.formattedEndDateUtc=a.isForeverFuture(i)?'':e.utcIsoToRelativeMoment(i,d).format('MM/DD/YYYY')}return g}},getEarliestOtherAssignment:function(b,c,d){if((void 0===c&&(c=null),null!=b._assignments)&&0!==b._assignments.length){var g=c?c._asOf:null,h=b._assignments.filter(function(b){return!b._isPrimary&&e.isCurrent({obj:b,asOfDate:g,fromProp:'_startDateUtc',toProp:'_endDateUtc',org:d})}),i=c._areSortingSecondaryAssignmentsByLatest,j=f.sortByObjectKey(h,'_createdUtc',!!i),k=f.sortByObjectKey(j,'_startDateUtc',!!i),l=k[0];if(l){var m=l._startDateUtc,n=l._endDateUtc;l.formattedStartDateUtc=a.isForeverPast(m)?'':e.utcIsoToRelativeMoment(m,d).format('MM/DD/YYYY'),l.formattedEndDateUtc=a.isForeverFuture(n)?'':e.utcIsoToRelativeMoment(n,d).format('MM/DD/YYYY')}return l}},getPayRateFrequencyString:function(a,b){return null==a?'N/A':b.find(function(b){return b.value===a}).name},jobTypeDetailFields:function(){return[[{prop:'_fTE',displayText:'FTE',dataTest:'fte'},{prop:'_hoursPerDay',displayText:'Hours/Day',dataTest:'hours-per-day'},{prop:'_workDaysPerYear',displayText:'Work Days/Year',dataTest:'work-days-per-year'}],[{prop:'_sickDaysPerSchoolYear',displayText:'Sick Days/Year',dataTest:'sick-days-per-school-year'},{prop:'_personalDaysPerSchoolYear',displayText:'Personal Days/Year',dataTest:'personal-days-per-school-year'},{prop:'_vacationDaysPerSchoolYear',displayText:'Vacation Days/Year',dataTest:'vacation-days-per-school-year'}]]}}}function b(a){return null!=a&&0!==a}function c(a,b){return a.hasOwnProperty(b)?a[b]:a.hasOwnProperty('_'+b)?a['_'+b]:void 0}a.$inject=['ssDateHlp','enumPayRateFrequency','ssDateByOrgHlp','ssArrayHlp','ssJobTypeHlp','ssDeprecated'],angular.module('super-suit-helpers').factory('ssEmployeeAssignmentHlp',a)})();
